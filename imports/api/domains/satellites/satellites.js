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
  alternateName: {
    type: String,
    optional: true,
  },
  orbitalSlot: Object.assign(LongitudeField, { label: 'Orbital Slot' }),
  type: {
    type: String,
    label: 'Service Type',
    allowedValues: ['hts', 'conventional'],
    autoform: {
      options: [
        { label: 'HTS', value: 'hts' },
        { label: 'Conventional', value: 'conventional' },
      ]
    }
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

// Add a hook to add slug name before inserting into mongodb database
Satellites.before.insert((userId, doc) => {
  doc.slug = slugify(doc.name);
});

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

