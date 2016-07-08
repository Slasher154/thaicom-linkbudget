/**
 * Created by Thanat on 2/6/2559.
 */

import './index.html';
import '/imports/ui/components/show-all-satellites/thaicom-satellite-widget.js';
import { Satellites } from '/imports/api/domains/satellites/satellites.js';

Template.index.onCreated(function () {
  // Subscribe all satellites data
  this.autorun(() => {
    this.subscribe('allSatellites');
  });
});


Template.index.helpers({
  thaicomSatellites() {
    // Add slugified name to the satellite objects so we can use it to generate sluggifed single satellite URL
    let satellites = Satellites.find({ isThaicom: true }).fetch();
    satellites.forEach((satellite) => {
      satellite.sluggifiedName = slugify(satellite.name);
    });
    return satellites;
  },
});

Template.index.events({

});
