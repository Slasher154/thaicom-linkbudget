/**
 * Created by Thanat on 21/7/2559.
 */

import { Gateways } from './gateways.js';
import { Satellites } from '../satellites/satellites.js';


// Provide all publications for gateway collections

// All Gateways
Meteor.publish('allGateways', function () {
  if (this.userId) {
    return Gateways.find();
  }
  return this.ready();
});

// All gateways of single satellite
Meteor.publish('gatewaysOfSingleSatellite', function (satelliteName) {
  // Retreive satellite here from either real/slugified name
  let satellite = Satellites.findOne({ $or: [{ slug: satelliteName }, { name: satelliteName }]});
  if (this.userId) {
    return Gateways.find({ satellite: satellite.name });
  }
  return this.ready();
});

// Return Main Gateway and Diversity Gateway from a Gateway Name and Satellite Name (either slug or real name)
Meteor.publish('mainAndDiversityGateway', function (satelliteName, gatewayName) {
  let satellite = Satellites.findOne({ $or: [{ slug: satelliteName }, { name: satelliteName }]});
  if (this.userId) {
    return Gateways.find( { $and: [{ $or: [{ slug: gatewayName }, { name: gatewayName }, { mainSiteSlug: gatewayName }, { mainSite: gatewayName }] }, { satellite: satellite.name }] });
  }
  return this.ready();
})