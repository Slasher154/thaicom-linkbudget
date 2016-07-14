/**
 * Created by Thanat on 12/7/2559.
 */

import { Mongo } from 'meteor/mongo';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Autoform } from 'meteor/aldeed:autoform';
import { FrequencyField, BandwidthField, FrequencyBandField, PolarizationField, NumberOfCarriersField, BackoffField, InterferenceTypeField, SatelliteOperationModeField, DefinedContoursField, CountryField } from '../schemas/schemas.js';
import { Satellites } from '../satellites/satellites.js';


export const Transponders = new Mongo.Collection('transponders');

// Transponders Schema to be used to generate autoforms (see aldeed:autoform)
Transponders.schema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
  },
  satellite: {
    type: String,
    label: 'Satellite',
    autoform: {
      options: function () {
        let satelliteObject = {};
        Satellites.find().forEach((satellite) => {
          satelliteObject[satellite.name] = satellite.name;
        });
        return satelliteObject;
      },
    },
  },
  uplinkCenterFrequency: Object.assign(FrequencyField, { label: 'Uplink Center Frequency (GHz)' }),
  downlinkCenterFrequency: Object.assign(FrequencyField, { label: 'Downlink Center Frequency (GHz)' }),
  uplinkFrequencyBand: Object.assign(FrequencyBandField, { label: 'Uplink Frequency Band' }),
  downlinkFrequencyBand: Object.assign(FrequencyBandField, { label: 'Downlink Frequency Band' }),
  bandwidth: Object.assign(BandwidthField, { label: 'Bandwidth (MHz)' }),
  type: {
    type: String,
    label: 'Beam Type',
    allowedValues: ['broadcast', 'spot', 'shape', 'augment'],
    autoform: {
      options: [
        { label: 'Broadcast', value: 'broadcast' },
        { label: 'Spot', value: 'spot' },
        { label: 'Shape', value: 'shape' },
        { label: 'Augment', value: 'augment' },
      ]
    },
  },
  path: {
    type: String,
    label: 'Link Path (Broadcast beam = Forward)',
    allowedValues: ['forward', 'return'],
    autoform: {
      options: [
        { label: 'Forward', value: 'forward' },
        { label: 'Return', value: 'return'},
      ]
    },
  },
  gtPeak: {
    type: Number,
    decimal: true,
    label: 'G/T at Peak (dB/K)',
  },
  saturatedEirpPeak: {
    type: Number,
    decimal: true,
    label: 'Saturated EIRP Peak per Transponder (dBW)',
  },
  uplinkPolarization: Object.assign(PolarizationField, { label: 'Uplink Polarization' }),
  downlinkPolarization: Object.assign(PolarizationField, { label: 'Downlink Polarization' }),
  twta: {
    type: String,
    label: 'TWTA (For Conventional just pust Transponder Name such as 5V)',
  },
  operatingModeOptions: {
    type: [String],
    minCount: 1,
    maxCount: 2,
    //allowedValues: ['FGM','ALC'],
  },
  operatingMode: Object.assign(SatelliteOperationModeField, {
    label: 'Default Operating mode (FGM or ALC)',
  }),
  saturatedFluxDensity: {
    type: 'Number',
    decimal: true,
    label: 'Saturated Flux Density per Transponder at Beam Peak (dBW/m^2)',
  },
  attenuationRange: {
    type: Number,
    decimal: true,
    min: 0,
    label: 'Adjustable Attenuation Range (dB)',
    optional: true,
  },
  defaultAttenuation: {
    type: Number,
    decimal: true,
    min: 0,
    label: 'Default Attenuation Value',
    optional: true,
  },
  defaultNumberOfCarriers: Object.assign(NumberOfCarriersField, {
    label: 'Default number of carriers in this Transponder',
  }),
  backoffSettings: {
    type: [Object],
    minCount: 3,
    maxCount: 3,
  },
  'backoffSettings.$.numberOfCarriers': Object.assign(NumberOfCarriersField, {
    label: 'Number of Carriers to set IBO, OBO, Intermod. Please give all values for single, two and multi carriers.',
  }),
  'backoffSettings.$.inputBackoff': Object.assign(BackoffField, {
    label: 'Input Backoff for this No. of carrier (dB)'
  }),
  'backoffSettings.$.outputBackoff': Object.assign(BackoffField, {
    label: 'Output Backoff for this No. of carrier (dB)'
  }),
  'backoffSettings.$.intermod': {
    type: Number,
    decimal: true,
    min: 0,
    label: 'Intermodulation for thos No. of carrier (dB)',
  },
  dynamicRange: {
    type: Number,
    decimal: true,
    min: 0,
    label: 'Dynamic Range for ALC Transponder (dB)',
    optional: true,
  },
  defaultEirpUpPerTransponder: {
    type: Number,
    decimal: true,
    label: 'Default EIRP up per Transponder (dBW)',
    optional: true,
  },
  designedAlcDeepin: {
    type: Number,
    decimal: true,
    label: 'Designed ALC deep-in (dB) (Positive = Within Dynamic Range, Negative = Not reach deep-in)',
    optional: true,
  },
  defaultGateway: {
    type: String,
    label: 'Default Gateway (optional)',
    optional: true,
  },
  carrierOverInterferences: {
    type: [Object],
    optional: true,
  },
  'carrierOverInterferences.$.type': Object.assign(InterferenceTypeField, {
    label: 'Interference Type',
  }),
  'carrierOverInterferences.$.path': {
    type: String,
    label: 'Interference Path (Uplink or Downlink)',
    allowedValues: ['uplink', 'downlink'],
    autoform: {
      options: [
        { label: 'Uplink', value: 'uplink' },
        { label: 'Downlink', value: 'downlink' },
      ]
    }
  },
  'carrierOverInterferences.$.location': Object.assign(DefinedContoursField, {
    label: 'Predefined locations for this interference',
  }),
  'carrierOverInterferences.$.value': {
    type: Number,
    decimal: true,
    label: 'Value of this interference in dB',
  },
  definedContours: {
    type: [Object],
    label: 'Defined Contours (Peak, 50%, EOC)',
    optional: true,
  },
  'definedContours.$.location': Object.assign(DefinedContoursField, {
    label: 'Location',
  }),
  'definedContours.$.value': {
    type: Number,
    decimal: true,
    max: 0,
    label: 'Contour Value (db) (Must be negative)',
  },
  beam: { // Conventional: Standard C, Global C | HTS => Transponder Name + Path except BC
    type: String,
    label: 'Beam Name',
  },
  country: Object.assign(CountryField, {
    label: 'Country',
    optional: true,
  }),


});

// Attach schema to satellite collection
Transponders.attachSchema(Transponders.schema);
