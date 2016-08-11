/**
 * Created by Thanat on 26/7/2559.
 */

import { Mongo } from 'meteor/mongo';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { FrequencyBandsField, PolarizationsField } from '../schemas/schemas.js';
import { FrequencyBands } from '../frequencyBands/frequencyBands.js';

export const Antennas = new Mongo.Collection('antennas');

// Antennas Schema to be used to generate autoforms
Antennas.schema = new SimpleSchema({
  name: {
    type: String,
    label: 'Antenna Name',
    unique: true,
  },
  vendor: {
    type: String,
    label: 'Antenna Vendor',
  },
  frequencyBandsName: Object.assign(FrequencyBandsField, {
    label: 'Frequency Bands',
    min: 1,
  }),
  antennaType: {
    type: String,
    allowedValues: ['parabolic', 'phased-array', 'metamaterial'],
    autoform: {
      options: [
        { label: 'Parabolic', value: 'parabolic' },
        { label: 'Phased Array', value: 'phased-array' },
        { label: 'Metamaterial', value: 'metamaterial' },
      ],
    },
    label: 'Antenna Type',
  },
  diameter: {
    type: Number,
    decimal: true,
    min: 0,
    label: 'Antenna diameter',
  },
  polarizations: Object.assign(PolarizationsField, {
    label: 'Polarizations (if linear you must select both V/H and if circular you must select both RHCP and LHCP',
    min: 1,
  }),
  receiveFrequencyRanges: {
    type: [Object],
    label: 'Receive Frequency Ranges, gain and G/T',
    optional: true,
  },
  'receiveFrequencyRanges.$.startFrequency': {
    type: Number,
    decimal: true,
    min: 0,
    label: 'Start Frequency',
  },
  'receiveFrequencyRanges.$.stopFrequency': {
    type: Number,
    decimal: true,
    min: 0,
    label: 'Stop Frequency',
  },
  'receiveFrequencyRanges.$.midBandGain': {
    type: Number,
    decimal: true,
    label: 'Midband Gain (dBi). If this number is specified, ' +
    'it will be used in calculation instead of antenna gain formula.',
    optional: true,
  },
  'receiveFrequencyRanges.$.gT': {
    type: Number,
    decimal: true,
    label: 'G/T (dB/K). If this number is specified, ' +
      'it will overwrite the standard formula and antenna gain above.',
    optional: true,
  },
  'receiveFrequencyRanges.$.noiseTemperatures': {
    type: [Object],
    label: 'Specify noise temperature at each elevation angle (optional)',
    optional: true,
  },
  'receiveFrequencyRanges.$.noiseTemperatures.$.elevationAngle': {
    type: Number,
    decimal: true,
    label: 'Elevation Angle (degree)',
  },
  'receiveFrequencyRanges.$.noiseTemperatures.$.noiseTemperature': {
    type: Number,
    decimal: true,
    label: 'Noise Temperature (K)',
  },
  transmitFrequencyRanges: {
    type: [Object],
    label: 'Transmit Frequency Range and midband gain',
    optional: true,
  },
  'transmitFrequencyRanges.$.startFrequency': {
    type: Number,
    decimal: true,
    min: 0,
    label: 'Start Frequency',
  },
  'transmitFrequencyRanges.$.stopFrequency': {
    type: Number,
    decimal: true,
    min: 0,
    label: 'Stop Frequency',
  },
  'transmitFrequencyRanges.$.midBandGain': {
    type: Number,
    decimal: true,
    label: 'Midband Gain (dBi). If this number is specified, ' +
    'it will be used in calculation instead of antenna gain formula.',
    optional: true,
  },
  isGatewayAntenna: {
    type: Boolean,
    defaultValue: false,
    label: 'True if this antenna is a gateway antenna. Default is false.',
  },
  autoTracking: {
    type: Boolean,
    defaultValue: false,
    label: 'True if this antenna has autotrack function (for gateway antenna)',
  }
});

Antennas.attachSchema(Antennas.schema);

// Add a hook to add slug name before inserting into mongodB database
Antennas.before.insert((userId, doc) => {

  doc.slug = slugify(doc.name);

  // If there is no frequency range given, add one on both Tx/Rx
  // assuming antenna can be used on full band
  if (!doc.receiveFrequencyRanges) {
    // Iterate through frequency bands
    doc.frequencyBandsName.forEach((freqeuncyBand) => {
      // Add the frequency range by looking up frequency band database
      let foundFrequencyBand = FrequencyBands.findOne({ $or: [{ slug: freqeuncyBand }, { name: freqeuncyBand }] });
      if (foundFrequencyBand) {
        // Assign receive frequency range of this antenna to the uplink of the given frequency band
        doc.receiveFrequencyRanges = foundFrequencyBand.downlinkFrequencyRanges;
      }
    });
  }
  if (!doc.transmitFrequencyRanges) {
    // Iterate through frequency bands
    doc.frequencyBandsName.forEach((freqeuncyBand) => {
      // Add the frequency range by looking up frequency band database
      let foundFrequencyBand = FrequencyBands.findOne({ $or: [{ slug: freqeuncyBand }, { name: freqeuncyBand }] });
      if (foundFrequencyBand) {
        // Assign transmit frequency range of this antenna to the uplink of the given frequency band
        doc.transmitFrequencyRanges = foundFrequencyBand.uplinkFrequencyRanges;
      }
    });
  }



});

Antennas.allow({
  insert: function(userId, doc) {
    let antenna = Antennas.findOne({ name: doc.name });
    if (antenna) {
      throw new Meteor.Error(403, 'This antenna already exists in the database.');
    }
    return Roles.userIsInRole(userId, ['admin']);
  },
  update: function(userId, doc) {
    return Roles.userIsInRole(userId, ['admin']);
  },
});

Antennas.helpers({
  frequencyBands() {
    let bands = this.freqeuncyBandsName.map(function (band) {
      return FrequencyBands.findOne({ slug: band }).name;
    });
    return bands.join(',');
  },
});


