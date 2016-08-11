/**
 * Created by Thanat on 21/7/2559.
 */

import { Mongo } from 'meteor/mongo';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Satellites } from '../satellites/satellites.js';
import { Countries } from '../countries/countries.js';
import { Antennas } from '../antennas/antennas.js';
import { Hpas } from '../hpas/hpas.js';
import { LongitudeField, LatitudeField, BackoffField, CountryField, LossField, HpaSchema } from '../schemas/schemas.js';

export const Gateways = new Mongo.Collection('gateways');

// Gateways Schema to be used to generate autoforms
Gateways.schema = new SimpleSchema({
  name: {
    type: String,
    label: 'Gateway Name',
  },
  satelliteName: {
    type: String,
    label: 'Satellite',
    optional: true,
  },
  city: {
    type: String,
    label: 'City',
  },
  countryName: Object.assign(CountryField, { label: 'Country', optional: true }),
  latitude: Object.assign(LatitudeField, { label: 'Latitude' }),
  longitude: Object.assign(LongitudeField, { label: 'Longitude'}),
  gatewayAvailability: {
    type: Number,
    decimal: true,
    min: 0,
    max: 1,
  },
  remoteAvailability: {
    type: Number,
    decimal: true,
    min: 0,
    max: 1,
  },
  priority: {
    type: String,
    allowedValues: ['main', 'diversity'],
    autoform: {
      options: [
        { label: 'Main', value: 'main' },
        { label: 'Diversity', value: 'diversity'},
      ]
    },
  },
  antennaName: {
    type: String,
    optional: true,
  },
  inputFeedLoss: Object.assign(LossField, { label: 'Loss between HPA output and antenna feed in dB (must be negative)' }),
  mainGateway: {
    type: String,
    label: 'Give the main site if this is the diversity site. (optional)',
    optional: true,
  },
  distanceFromMainSiteInKm: {
    type: Number,
    decimal: true,
    optional: true,
  },
});

// Attach schema to gateway collection
Gateways.attachSchema(Gateways.schema);

// Add a hook to add slug name before inserting into mongodB database
Gateways.before.insert((userId, doc) => {
  // Insert slugify name of the gateway name
  doc.slug = slugify(doc.name);

  // Insert slugify name of its main site gateway name if this site has a main gateway (implies this
  // doc is a site diversity)
  if (doc.mainGateway) {
    doc.mainGatewaySlug = slugify(doc.mainGateway);
  }

  // Insert a satellite ID as a foreign key if satellite name is given
  if (doc.satelliteName) {
    let satellite = Satellites.findOne({ name: doc.satelliteName });
    if (satellite) {
      doc.satelliteId = satellite._id;
    } else {
      throw new Meteor.Error(500, `Satellite '${doc.satelliteName}' does not match any satellite in the database`);
    }
  }

  // Insert a country ID as a foreign key if country name is given
  if (doc.countryName) {
    let country = Countries.findOne({ 'name.common': doc.countryName });
    if (country) {
      doc.countryId = country._id;
    } else {
      throw new Meteor.Error(500, `Country '${doc.countryName}' does not match any country in the database.`);
    }
  }

  // Insert an antenna ID as a foreign key if antenna name is given
  if (doc.antennaName) {
    let antenna = Antennas.findOne({ name: doc.antennaName });
    if (antenna) {
      doc.antennaId = antenna._id;
    } else {
      throw new Meteor.Error(500, `Antenna '${doc.antennaName}' does not match any antenna in the database.`);
    }
  }
  
  // Insert a main site ID as as foreign key if this site is diversity
  if (doc.priority === 'diversity') {
    if (doc.mainGateway) {
      const mainGateway = Gateways.findOne({ name: doc.mainGateway });
      doc.mainGatewayId = mainGateway._id;
    } else {
      throw new Meteor.Error(500, `Main site '${doc.mainGateway}' does not match any gateway in the database.`);
    }
  }

  // Add a display name for gateway TC-4
  if (doc.satelliteName === 'Thaicom 4') {
    doc.displayName = `${doc.name} (${doc.city})`
  } else {
    doc.displayName = doc.name;
  }
});

Gateways.allow({
  insert: function(userId, doc) {
    let gateway = Gateways.findOne({ name: doc.name });
    if (gateway) {
      throw new Meteor.Error(403, 'This gateway already exists in the database.');
    }
    return Roles.userIsInRole(userId, ['admin']);
  },
  update: function(userId, doc) {
    return Roles.userIsInRole(userId, ['admin']);
  },
});

// Gateway Helpers function
Gateways.helpers({
  satellite() {
    return Satellites.findOne({ _id: this.satelliteId });
  },
  satelliteName() {
    return Satellites.findOne({ _id: this.satelliteId }).name;
  },
  satelliteSlug() {
    return Satellites.findOne({ _id: this.satelliteId }).slug;
  },
  country() {
    return Countries.findOne({ _id: this.countryId });
  },
  countryName() {
    return Countries.findOne({ _id: this.countryId }).name.common;
  },
  antennaDiameter() {
    return Antennas.findOne({ _id: this.antennaId }).diameter;
  },
});