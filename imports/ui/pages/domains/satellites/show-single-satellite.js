/**
 * Created by Thanat on 5/7/2559.
 */

import './show-single-satellite.html';
import '/imports/ui/components/show-single-satellite/transponder-list.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Satellites } from '/imports/api/domains/satellites/satellites.js';

Template.showSingleSatellite.onCreated(function () {
  // Subscribe a single satellite from URL which is slugified name
  this.autorun(() => {
    let viewingSatellite = FlowRouter.getParam('satelliteName');
    this.subscribe('singleSatelliteFromSlugifiedName', viewingSatellite);
  });
});

Template.showSingleSatellite.helpers({
  viewingSatellite() {
    return Satellites.findOne();
  },
});

