/**
 * Created by Thanat on 5/8/2559.
 */

import { FrequencyBands } from './frequencyBands.js';

// Provide all publications for frequency bands

// All frequency bands
Meteor.publish('allFrequencyBands', function () {
  if (this.userId) {
    return FrequencyBands.find();
  }
  return this.ready();
});

// Single frequency band from slugify name
Meteor.publish('singleFrequencyBand', function(band) {
  if (this.userId) {
    return FrequencyBands.find({ slug: band });
  }
  return this.ready();
});

