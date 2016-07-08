/**
 * Created by Thanat on 28/6/2559.
 */
import './show-all-satellites.html';
import '/imports/ui/components/show-all-satellites/thaicom-satellite-widget.js';
import { Satellites } from '/imports/api/domains/satellites/satellites.js';

Template.showAllSatellites.onCreated(function () {
  // Subscribe all satellites data
  this.autorun(() => {
    this.subscribe('allSatellites');
  });
});


Template.showAllSatellites.helpers({
  thaicomSatellites() {
    return Satellites.find({ isThaicom: true });
  },
});
