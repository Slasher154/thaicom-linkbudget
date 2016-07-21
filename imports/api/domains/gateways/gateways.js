/**
 * Created by Thanat on 21/7/2559.
 */

import { Mongo } from 'meteor/mongo';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { LongitudeField, LatitudeField, BackoffField, CountryField, HpaSchema } from '../schemas/schemas.js';

export const Gateways = new Mongo.Collection('gateways');

// Gateways Schema to be used to generate autoforms
Gateways.schema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
  },
  satellite: {
    type: String,
    label: 'Satellite',
  },
  city: {
    type: String,
    label: 'City',
  },
  country: Object.assign(CountryField, { label: 'Country' }),
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
  antennaSize: {
    type: Number,
    decimal: true,
    min: 0,
  },
  hpa: {
    type: HpaSchema,
  },
  mainSite: {
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
  doc.slug = slugify(doc.name);
  if (doc.mainSite) {
    doc.mainSiteSlug = slugify(doc.mainSite);
  }
});