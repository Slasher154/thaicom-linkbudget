/**
 * Created by Thanat on 4/7/2559.
 */

import { SimpleSchema } from 'meteor/aldeed:simple-schema';

// Define custom schemas for multiple usage

export const LongitudeField = {
  type: Number,
  decimal: true,
  min: -180,
  max: 180,
};

export const LatitudeField = {
  type: Number,
  decimal: true,
  min: -90,
  max: 90,
}