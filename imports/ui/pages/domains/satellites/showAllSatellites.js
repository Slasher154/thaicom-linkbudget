/**
 * Created by Thanat on 28/6/2559.
 */
import './showAllSatellites.html';
import '/imports/ui/components/showAllSatellites/thaicomSatelliteWidget.js';
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
