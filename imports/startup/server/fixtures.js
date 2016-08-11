/**
 * Created by Thanat on 12/5/2559.
 */

// Fill the DB with example data on startup

import '../../api/domains/countries/fixtures.js';
import '../../api/domains/satellites/fixtures.js';
import '../../api/domains/transponders/fixtures.js';
import '../../api/domains/gateways/fixtures.js';
import '../../api/domains/modems/fixtures.js';
import '../../api/domains/ituRainAttenuation/fixtures.js';
import '../../api/domains/antennas/fixtures.js';
import '../../api/domains/frequencyBands/fixtures.js';
import '../../api/domains/bucs/fixtures.js';

Meteor.call('fillInitialCountriesData');
Meteor.call('fillInitialFrequencyBandsData');
Meteor.call('fillInitialAntennasData');
Meteor.call('fillInitialSatellitesData');
Meteor.call('fillInitialGatewaysData');
Meteor.call('fillInitialModemsData');
Meteor.call('fillInitialBucsData');
Meteor.call('fillInitialTranspondersData');
Meteor.call('fillInitialItuRainData');
