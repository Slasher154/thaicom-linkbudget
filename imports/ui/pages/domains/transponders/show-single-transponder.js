/**
 * Created by Thanat on 15/7/2559.
 */

import './show-single-transponder.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Transponders } from '/imports/api/domains/transponders/transponders.js';
import { Satellites } from '/imports/api/domains/satellites/satellites.js';

Template.showSingleTransponder.onCreated(function () {
  // Subscribe all transponders of the selected satellite
  // This will be used to populate the selection on transponder selector widget
  this.autorun(() => {
    let viewingSatellite = FlowRouter.getParam('satelliteName');
    let viewingTransponder = FlowRouter.getParam('transponderName');
    console.log(viewingSatellite);
    // this.subscribe('singleTransponder', viewingSatellite, viewingTransponder );
    this.subscribe('transpondersOfSingleSatellite', viewingSatellite);
    this.subscribe('singleSatellite', viewingSatellite);
  });
});

Template.showSingleTransponder.helpers({
  viewingTransponder() {
    // Find the transponder object from URL (url is a slugified name)
    let viewingTransponder = FlowRouter.getParam('transponderName');
    return Transponders.findOne({ slug: viewingTransponder });
  },
  viewingSatellite() {
    return Satellites.findOne();
  },
});

