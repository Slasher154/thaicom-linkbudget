/**
 * Created by Thanat on 12/5/2559.
 */

// Fill the DB with example data on startup

import '../../api/domains/satellites/fixtures.js';

Meteor.call('Satellites.insert');