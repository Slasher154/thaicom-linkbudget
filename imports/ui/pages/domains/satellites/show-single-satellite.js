/**
 * Created by Thanat on 5/7/2559.
 */

import './show-single-satellite.html';
import '../../../components/transponder-picker/transponder-picker-widget.js';
import '../../../components/recent-updates/recent-updates.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Satellites } from '/imports/api/domains/satellites/satellites.js';

Template.showSingleSatellite.onCreated(function () {
  // Subscribe a single satellite from URL which is slugified name
  this.autorun(() => {
    let viewingSatellite = FlowRouter.getParam('satelliteName');
    this.subscribe('singleSatellite', viewingSatellite);
  });
});

Template.showSingleSatellite.helpers({
  viewingSatellite() {
    return Satellites.findOne();
  },
  notifications() {
    return [
      { title: 'CTP Extended', occuredAt: '1 mins ago', message: 'CTP 999_2016 has been extended by Thanat V.' },
      { title: 'Link Budget Request', occuredAt: '5 mins ago', message: 'Digital Life Project in Thailand link has been requested by Thanat V.' },
    ];
  },
});

