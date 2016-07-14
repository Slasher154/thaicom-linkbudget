/**
 * Created by Thanat on 12/7/2559.
 */

import './add-new-transponder.html';

import { Satellites } from '/imports/api/domains/satellites/satellites.js';
import { Transponders } from '/imports/api/domains/transponders/transponders.js';

Template.addNewTransponder.onCreated(function () {
  // Subscribe to satellite list in order to populate satellite name selection
  // for a transponder
  this.autorun(() => {
    this.subscribe('allSatellites');
  });
});

Template.addNewTransponder.helpers({
  transponders() {
    return Transponders;
  },
});