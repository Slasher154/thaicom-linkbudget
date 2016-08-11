/**
 * Created by Thanat on 2/8/2559.
 */

import { Mongo } from 'meteor/mongo';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { BackoffField } from '../schemas/schemas.js';

export const Bucs = new Mongo.Collection('bucs');

// BUCs Schema to be used to generate autoform
Bucs.schema = new SimpleSchema({
  name: {
    type: String,
    label: 'BUC Name',
    unique: true,
  },
  vendor: {
    type: String,
    label: 'Vendor',
  },
  sizingInWatts: {
    type: Number,
    decimal: true,
    label: 'BUC Sizing in Watts',
  },
  outputBackoff: Object.assign(BackoffField, { label: 'BUC Output Backoff in dB (must be negative)'}),
});

Bucs.attachSchema(Bucs.schema);