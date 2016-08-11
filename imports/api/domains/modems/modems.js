/**
 * Created by Thanat on 22/7/2559.
 */

import { Mongo } from 'meteor/mongo';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Autoform } from 'meteor/aldeed:autoform';

export const Modems = new Mongo.Collection('modems');

// Modems Schema to be used to generate autoforms (see aldeed:autoform)

Modems.schema = new SimpleSchema({
  name: {
    type: String,
    label: 'Modem Name',
    unique: true,
  },
  vendor: {
    type: String,
    label: 'Vendor',
  },
  applications: {
    type: [Object],
    label: 'Modem applications',
    minCount: 1,
  },
  'applications.$.name': {
    type: String,
    label: 'Application Name',
  },
  'applications.$.linkType': {
    type: [String],
    label: 'Link Type this application can be used in',
    allowedValues: ['outbound', 'inbound'],
    autoform: {
      options: [
        { label: 'Outbound', value: 'outbound' },
        { label: 'Inbound', value: 'inbound' },
      ],
    },
  },
  'applications.$.acm': {
    type: Boolean,
    label: 'Has ACM?',
    defaultValue: false,
  },
  'applications.$.defaultLinkMargin': {
    type: Number,
    decimal: true,
    defaultValue: 2,
    min: 0,
    label: 'Default Link Margin in dB',
  },
  'applications.$.minimumSymbolRate': {
    type: Number,
    decimal: true,
    optional: true,
    min: 0,
    label: 'Minimum Symbol Rate in ksps. Leave blank for no symbol rate limitation',
  },
  'applications.$.maximumSymbolRate': {
    type: Number,
    decimal: true,
    optional: true,
    min: 0,
    label: 'Maximum Symbol Rate in ksps. Leave blank for no symbol rate limitation',
  },
  'applications.$.availableSymbolRates': {
    type: [Number],
    decimal: true,
    optional: true,
    min: 0,
    minCount: 1,
    label: 'Available Symbol rates in ksps. Leave blank for no symbol rate limitation',
  },
  'applications.$.availableRollOffFactors': {
    type: [Number],
    decimal: true,
    minCount: 1,
    label: 'Available Roll-off Factors (e.g. 1.05, 1.2)',
  },
  'applications.$.defaultRollOffFactor': {
    type: Number,
    decimal: true,
    label: 'Default Roll-off Factor for this application (e.g. 1.2)',
  },
  'applications.$.dynamicChannels': {
    type: Boolean,
    optional: true,
    defaultValue: false,
    label: 'True if the application has dynamic channel i.e. it can adjust both MCG and carrier size during fade to obtain maximum capacity',
  },
  'applications.$.warningMessages': {
    type: [String],
    label: 'Any warning messages to be included in the link budget sheet',
    optional: true,
  },
  'applications.$.mcgs': {
    type: [Object],
    minCount: 1,
    label: 'Modulation and Codings',
  },
  'applications.$.mcgs.$.name': {
    type: String,
    label: 'MCG Name (e.g. QPSK 1/2)',
  },
  'applications.$.mcgs.$.spectralEfficiency': {
    type: Number,
    decimal: true,
    min: 0,
    exclusiveMin: true,
    label: 'Spectral Efficiency (MBE) (bps/Hz)',
  },
  'applications.$.mcgs.$.requiredEsNo': {
    type: Number,
    decimal: true,
    label: 'Threshold Es/No (dB)',
  },
});

// Attach schema to satellite collection
Modems.attachSchema(Modems.schema);

Modems.before.insert((userId, doc) => {
  if (!doc.dynamicChannels) {
    doc.dynamicChannels = false;
  }
});