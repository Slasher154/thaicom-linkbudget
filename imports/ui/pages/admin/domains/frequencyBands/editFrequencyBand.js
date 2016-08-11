/**
 * Created by Thanat on 5/8/2559.
 */

import './editFrequencyBand.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { FrequencyBands } from '/imports/api/domains/frequencyBands/frequencyBands.js';

Template.editFrequencyBand.onCreated(function () {

  // Get the viewing frequency band from URL and subscribe to that band
  this.autorun(() => {
    // The viewing band is the value from the URL ex. 'c-band', 'ku-band'
    let viewingBand = FlowRouter.getParam('band');

    // Subscribe this frequency band
    this.subscribe('singleFrequencyBand', viewingBand);
  });
});

Template.editFrequencyBand.helpers({
  frequencyBandName() {
    return FrequencyBands.findOne().name;
  },
  frequencyBands() {
    return FrequencyBands;
  },
  band() {
    return FrequencyBands.findOne();
  },
});