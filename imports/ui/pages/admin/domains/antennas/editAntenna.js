/**
 * Created by Thanat on 9/8/2559.
 */

import './editAntenna.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Antennas } from '/imports/api/domains/antennas/antennas.js';

Template.editAntenna.onCreated(function () {

  // Get the viewing antenna from URL and subscribe to that band
  this.autorun(() => {
    // The viewing band is the value from the URL ex. 'standard-1-2-m'
    let viewingAntenna = FlowRouter.getParam('antennaName');

    // Subscribe this antenna
    this.subscribe('singleAntenna', viewingAntenna);
  });
});

Template.editAntenna.helpers({
  antennaName() {
    return Antennas.findOne().name;
  },
  antennas() {
    return Antennas;
  },
  antenna() {
    return Antennas.findOne();
  },
});