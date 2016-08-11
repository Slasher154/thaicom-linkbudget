/**
 * Created by Thanat on 26/7/2559.
 */

import { Mongo } from 'meteor/mongo';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { FlowRouter } from 'meteor/kadira:flow-router';


export const FrequencyBands = new Mongo.Collection('frequencyBands');

// Frequency Bands to be used to generate autoforms
FrequencyBands.schema = new SimpleSchema({
  name: {
    type: String,
    label: 'Frequency Band Name',
  },
  uplinkFrequencyRanges: {
    type: [Object],
    label: 'Transmit Frequency Ranges',
    minCount: 1,
  },
  'uplinkFrequencyRanges.$.startFrequency': {
    type: Number,
    decimal: true,
    label: 'Start Frequency',
  },
  'uplinkFrequencyRanges.$.stopFrequency': {
    type: Number,
    decimal: true,
    label: 'Stop Frequency',
  },
  downlinkFrequencyRanges: {
    type: [Object],
    label: 'Receive Frequency Ranges',
    minCount: 1,
  },
  'downlinkFrequencyRanges.$.startFrequency': {
    type: Number,
    decimal: true,
    label: 'Start Frequency',
  },
  'downlinkFrequencyRanges.$.stopFrequency': {
    type: Number,
    decimal: true,
    label: 'Stop Frequency',
  },
});

FrequencyBands.attachSchema(FrequencyBands.schema);

FrequencyBands.before.insert((userId, doc) => {
  doc.slug = slugify(doc.name);
});

FrequencyBands.allow({
  insert: function(userId, doc) {
    let band = FrequencyBands.findOne({ name: doc.name });
    if (band) {
      throw new Meteor.Error(403, 'This frequency band already exists in the database.');
    }
    return Roles.userIsInRole(userId, ['admin']);
  },
  update: function(userId, doc) {
    return Roles.userIsInRole(userId, ['admin']);
  },
});

