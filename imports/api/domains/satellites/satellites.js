/**
 * Created by Thanat on 24/6/2559.
 */

import { Mongo } from 'meteor/mongo';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { LongitudeField } from '../schemas/schemas.js';

export const Satellites = new Mongo.Collection('satellites');

// Satellite Schema to be used to generate autoforms (see aldeed:autoform)
Satellites.schema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
  },
  orbitalSlot: Object.assign(LongitudeField, { label: 'Orbital Slot' }),
  type: {
    type: String,
    label: 'Service Type',
    allowedValues: ['Broadband', 'Conventional'],
  },
  isThaicom: {
    type: Boolean,
    label: 'Owned by Thaicom',
  },
  isActive: {
    type: Boolean,
    defaultValue: false,
    label: 'Satellite Active Status',
  },
});

// Attach schema to satellite collection
Satellites.attachSchema(Satellites.schema);

// Allow callback for insert, update, remove from autoforms

Satellites.allow({
  insert: function(userId, doc) {
    let sat = Satellites.findOne({ name: doc.name });
    if (sat) {
      throw new Meteor.Error(403, 'This satellite already exists in the database.');
    }
    return Roles.userIsInRole(userId, ['admin']);
  },
});

