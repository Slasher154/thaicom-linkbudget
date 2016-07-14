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

// Return a satellite from slugified name
Meteor.publish('singleSatelliteFromSlugifiedName', function (satelliteName) {
  if (this.userId) {
    // This code could be better if we can query the database with slugified name
    // In this case, we find all satellite first, then check each result if the name after slugify is equal to given
    // name. Then, we store its ID and find again with only that ID to get a single result.
    let allSatellites = Satellites.find().fetch();
    let targetSatelliteId = '';
    allSatellites.forEach((satellite) => {
      if (slugify(satellite.name) === satelliteName) {
        targetSatelliteId = satellite._id;
      }
    });
    return [Satellites.find({ _id: targetSatelliteId })];
  }
  return this.ready();
});