/**
 * Created by Thanat on 2/8/2559.
 */

import { Mongo } from 'meteor/mongo';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { BackoffField, LossField } from '../schemas/schemas.js';

export const Hpas = new Mongo.Collection('hpa');

// HPA Schema to be used to generate autoforms
Hpas.schema = new SimpleSchema({
  name: {
    type: String,
    label: 'HPA Name',
    unique: true,
  },
  vendor: {
    type: String,
    label: 'HPA Vendor',
  },
  hpaType: {
    type: String,
    label: 'HPA type: SSPA, TWTA or Klystron',
    allowedValues: ['twta', 'sspa', 'klystron'],
    autoform: {
      options: [
        { label: 'SSPA', value: 'sspa' },
        { label: 'TWTA', value: 'twta' },
        { label: 'Klystron', value: 'klystron' },
      ],
    },
  },
  sizingInWatts: {
    type: Number,
    decimal: true,
    label: 'HPA Sizing in Watts',
  },
  outputBackoff: Object.assign(BackoffField, { label: 'HPA Output Backoff in dB (must be negative)'}),
  inputFeedLoss: Object.assign(LossField, { label: 'Input feed loss in dB (must be negative)'}),
  intermod: {
    type: Number,
    decimal: true,
    label: 'Intermodulation of HPA',
  },
  intermodRain: {
    type: Number,
    decimal: true,
    label: 'Intermodulation of HPA at Rain Fade',
  },
  upc: {
    type: Number,
    decimal: true,
    label: 'Uplink Power Control in dB',
  },
});