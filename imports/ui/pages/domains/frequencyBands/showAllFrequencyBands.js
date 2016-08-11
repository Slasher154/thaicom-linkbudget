/**
 * Created by Thanat on 5/8/2559.
 */

import './showAllFrequencyBands.html';
import { FrequencyBands } from '/imports/api/domains/frequencyBands/frequencyBands.js';

Template.showAllFrequencyBands.onCreated(function () {
  // Subscribe all frequency bands data
  this.autorun(() => {
    this.subscribe('allFrequencyBands');
  });
});

Template.showAllFrequencyBands.helpers({
  settings() {
    return {
      collection: FrequencyBands,
      fields: [
        { key: 'name', label: 'Name' },
        { key: 'uplinkFrequencyRanges', label: 'Uplink Frequency Ranges (GHz)', fn: function (value, object, key){
          let text = '';
          value.forEach((band) => {
            text += `${band.startFrequency}-${band.stopFrequency} `;
          });
          return text;
        }, },
        { key: 'downlinkFrequencyRanges', label: 'Downlink Frequency Ranges (GHz)', fn: function (value, object, key){
          let text = '';
          value.forEach((band) => {
            text += `${band.startFrequency}-${band.stopFrequency} `;
          });
          return text;
        }, },
        { key: 'slug', label: 'Actions', tmpl: Template.editFrequencyBandButton },
      ],
    };
  },
});

Template.editFrequencyBandButton.helpers({
  editFrequencyBandPath() {
    return FlowRouter.path('editFrequencyBand', { band: this.slug });
  },
});

