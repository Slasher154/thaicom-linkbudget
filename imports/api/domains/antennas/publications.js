/**
 * Created by Thanat on 9/8/2559.
 */

import { Antennas } from './antennas.js';
import { FrequencyBands } from '../frequencyBands/frequencyBands.js';

// Provide all publications for antennas

// All antennas
Meteor.publishComposite('allAntennas', {
  find: function() {
    return Antennas.find();
  },
  children: [
    {
      find: function (antenna) {
        return FrequencyBands.find({
          slug: { $in: antenna.frequencyBandsName }
        });
      },
    },
  ],
});

// Single frequency band from slugify name
Meteor.publish('singleAntenna', function(antenna) {
  if (this.userId) {
    return Antennas.find({ slug: antenna });
  }
  return this.ready();
});