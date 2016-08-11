/**
 * Created by Thanat on 26/7/2559.
 */

import { Mongo } from 'meteor/mongo';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { LongitudeField, LatitudeField } from '../schemas/schemas.js';

export const ItuRainAttenuation = new Mongo.Collection('ituRainAttenuation');

// ITU Rain Attenuation data schema

ItuRainAttenuation.schema = new SimpleSchema({
  year: {
    type: Number,
    label: 'Year',
    min: 1990,
    max: 2300,
  },
  name: {
    type: String,
    label: 'Give this rain data a friendly name',
  },
  recommendation: {
    type: String,
    label: 'ITU Recommendation document name',
    optional: true,
  },
  dataPoints: {
    type: [Object],
    label: 'Data Points',
    minCount: 1,
  },
  'dataPoints.$.latitude': {
    type: LatitudeField,
    label: 'Latitude',
  },
  'dataPoints.$.longitude': {
    type: LongitudeField,
    label: 'Longitude',
  },
  'dataPoints.$.value': {
    type: Number,
    decimal: true,
    label: 'Rainfall rate in mm/hr',
  },
});
