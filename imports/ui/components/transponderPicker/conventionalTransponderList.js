/**
 * Created by Thanat on 15/7/2559.
 */

import './conventionalTransponderList.html';
import './transponderButtonGroup.html';
import { Transponders } from '/imports/api/domains/transponders/transponders.js';
import { FlowRouter } from 'meteor/kadira:flow-router';


Template.conventionalTransponderList.onCreated(function () {
  this.autorun(() => {
    // Access the satellite object given from the parent template
    let dataContext = Template.currentData();

    // Subscribe to all transponders data of a given satellite
    this.subscribe('transpondersOfSingleSatellite', dataContext.satellite.name);

    // Attach ReactiveVar 'transponderList' to this template so button group of
    // transponders is reactively rendered based on this value
    this.transponderList = new ReactiveVar([]);
  });
});

Template.conventionalTransponderList.onRendered(function () {
  this.autorun(() => {
    let $beamPicker = $('#beamPicker').select2();

    // Change the beam picker and render button group if the transponder
    // is already selected (re-render when navigate to new beam)
    let transponder = Template.currentData().transponder;
    if (transponder) {
      $beamPicker.val(transponder.beam).change();
    }
  });
});

Template.conventionalTransponderList.helpers({
  beams() {
    // Group HTS transponders in countries
    // [{ beam: 'Standard C', transponders: [{ name: '1V', ... }, { name: '2V', ...}], { beam: ...}]
    let transpondersGroupByBeam = _.groupBy(Transponders.find().fetch(), 'beam');
    var beams = [];
    Object.keys(transpondersGroupByBeam).forEach((key) => {
      beams.push({
        name: key,
        transponders: _.sortBy(transpondersGroupByBeam[key], 'name'),
      });
    });
    return _.sortBy(beams, 'name');
  },
  transponders() {
    // Here we get our template instance from Template.instance() and
    // can access transponders from it
    // Here we get our template instance from Template.instance() and
    // can access transponders from it
    let transponders = Template.instance().transponderList.get();
    let viewingTransponder = Template.currentData().transponder;
    if(viewingTransponder) {
      transponders.forEach((tp) => {
        if (tp._id === viewingTransponder._id) {
          tp.activeStatus = 'active';
        }
      });
    }
    return transponders;
  }
});

Template.conventionalTransponderList.events({
  'change select': function(event, template) {
    let beam = $(event.target).val();
    if(beam) {
      template.transponderList.set(_.sortBy(Transponders.find({ beam: beam }).fetch(),'uplinkCenterFrequency'));
    }
  },
  'click .transponderLink': function(event, template) {
    event.preventDefault();
    let selectedTransponderSlug = $(event.target).find('input').attr('id');

    // Access the satellite object given from the parent template
    let dataContext = Template.currentData();
    let satelliteSlug = dataContext.satellite.slug;
    let path = FlowRouter.path('showSingleTransponder', {
      satelliteName: satelliteSlug,
      transponderName: selectedTransponderSlug,
    });
    FlowRouter.go(path);
  },
});