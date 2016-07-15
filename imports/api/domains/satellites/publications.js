/**
 * Created by Thanat on 4/7/2559.
 */

import { Satellites } from './satellites.js';

// Provide all publications for satellite collections

// All satellites
Meteor.publish('allSatellites', function () {
  if (this.userId) {
    return Satellites.find();
  }
  return this.ready();
});

// Return a satellite from either satellite name or slugified name
Meteor.publish('singleSatellite', function (satelliteName) {
  if (this.userId) {
    return [Satellites.find({ $or: [{ slug: satelliteName }, { name: satelliteName }]})];
  }
  return this.ready();
});