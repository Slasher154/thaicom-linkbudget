/**
 * Created by Thanat on 12/5/2559.
 */

// Fill the DB with example data on startup

import '../../api/domains/satellites/fixtures.js';
import '../../api/domains/transponders/fixtures.js';
import '../../api/domains/gateways/fixtures.js';

Meteor.call('fillInitialSatellitesData');
Meteor.call('fillInitialTranspondersData');
Meteor.call('fillInitialGatewaysData');