/**
 * Created by Thanat on 21/7/2559.
 */

import { Gateways } from './gateways.js';
import { Satellites } from '../satellites/satellites.js';
import { Antennas } from '../antennas/antennas.js';
import { Countries } from '../countries/countries.js';


// Provide all publications for gateway collections

// All Gateways

Meteor.publishComposite('allGateways', {
  find: function () {
    return Gateways.find();
  },
  children: [
    {
      find: function (gateway) {
        return Antennas.find({
          _id: gateway.antennaId,
        });
      },
    },
    {
      find: function (gateway) {
        return Countries.find({ _id: gateway.countryId }, { fields: { name: 1 } });
      },
    },
    {
      find: function (gateway) {
        return Satellites.find({ _id: gateway.satelliteId });
      },
    }
  ],
});


// Single Gateway
Meteor.publish('singleGateway', function (gatewayName) {
  if (this.userId) {
    return Gateways.find({ $or: [{ slug: gatewayName }, { name: gatewayName }] });
  }
  return this.ready();
});

Meteor.publish('singleGatewayFromId', function (gatewayId) {
  if (this.userId) {
    return Gateways.find({ _id: gatewayId });
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
});

