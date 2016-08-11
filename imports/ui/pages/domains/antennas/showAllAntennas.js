/**
 * Created by Thanat on 9/8/2559.
 */

import './showAllAntennas.html';
import { Antennas } from '/imports/api/domains/antennas/antennas.js';

Template.showAllAntennas.onCreated(function () {
  // Subscribe all antennas data
  this.autorun(() => {
    this.subscribe('allAntennas');
  });
});

Template.showAllAntennas.helpers({
  antennas() {
    return Antennas.find();
  },
  settings() {
    return {
      collection: Antennas,
      fields: [
        { key: 'name', label: 'Name' },
        { key: 'vendor', label: 'Vendor' },
        { key: 'diameter', label: 'Diameter (m)' },
        { key: 'antennaType', label: 'Antenna Type'},
        { key: 'frequencyBandsName', label: 'Frequency', fn: function(value, object, key) {
          return value.join(',');
        }, },
        { key: 'slug', label: 'Actions', tmpl: Template.editAntennaButton },
      ],
    };
  },
});

Template.editAntennaButton.helpers({
  editAntennaPath() {
    return FlowRouter.path('editAntenna', { antennaName: this.slug });

  }
});
