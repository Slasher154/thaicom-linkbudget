/**
 * Created by Thanat on 15/7/2559.
 */

import { Transponders } from './transponders.js';
import { Satellites } from '../satellites/satellites.js';

// Provide all publications for transponders collections
// Given satellite could be either real name or slugified name
Meteor.publish('transpondersOfSingleSatellite', function (satelliteName) {
  // Retreive satellite here from either real/slugified name
  let satellite = Satellites.findOne({ $or: [{ slug: satelliteName }, { name: satelliteName }]});
  if (this.userId) {
    return Transponders.find({ satellite: satellite.name }, {
      fields: {
        name: 1,
        beam: 1,
        displayName: 1,
        path: 1,
        slug: 1,
        satellite: 1,
        country: 1,
        bandwidth: 1,
        uplinkFrequencyBand: 1,
        downlinkFrequencyBand: 1,
        uplinkPolarization: 1,
        downlinkPolarization: 1,
        defaultGateway: 1,
        uplinkCenterFrequency: 1,
      }
    });
  }
  return this.ready();
});

Meteor.publish('singleTransponder', function (satelliteName, transponderName) {
  let satellite = Satellites.findOne({ $or: [{ slug: satelliteName }, { name: satelliteName }]});
  if (this.userId) {
    return Transponders.find( { $and: [{ $or: [{ slug: transponderName }, { name: transponderName, beam: transponderName }]}, { satellite: satellite.name }]}, {
      fields: {
        name: 1,
        beam: 1,
        displayName: 1,
        path: 1,
        slug: 1,
        satellite: 1,
        country: 1,
        bandwidth: 1,
        uplinkFrequencyBand: 1,
        downlinkFrequencyBand: 1,
        uplinkPolarization: 1,
        downlinkPolarization: 1,
        defaultGateway: 1,
        uplinkCenterFrequency: 1,
      }
    });
  }
  return this.ready();
});