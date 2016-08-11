/**
 * Created by Thanat on 15/7/2559.
 */

import './htsTransponderList.html';
import './transponderButtonGroup.html';
import { Transponders } from '/imports/api/domains/transponders/transponders.js';
import { Satellites } from '/imports/api/domains/satellites/satellites.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.htsTransponderList.onCreated(function () {
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

Template.htsTransponderList.onRendered(function () {
  this.autorun(() => {
    let $countryPicker = $('#countryPicker').select2();

    // Change the country picker and render button group if the transponder
    // is already selected (re-render when navigate to new beam)
    let transponder = Template.currentData().transponder;
    if (transponder) {
      // Change the value of country picker
      $countryPicker.val(transponder.country).change();
      /*
      // Set active class to button to indicate that it's already selected
      console.log(transponder.slug);
      let $selectedTransponderButton = $('#' + transponder.slug);
      console.log($selectedTransponderButton);
      let $selectedTransponderLabel = $selectedTransponderButton.parent();
      console.log($selectedTransponderLabel);
      $selectedTransponderLabel.addClass('active');
      */
    }
  });
});


Template.htsTransponderList.helpers({
  countries() {
    // Group HTS transponders in countries
    // [{ country: India, transponders: [{ name: 101, ... }, { name: '102', ...}], { country: ...}]
    let transpondersGroupByCountry = _.groupBy(Transponders.find().fetch(), 'country');
    var countries = [];
    Object.keys(transpondersGroupByCountry).forEach((key) => {
      countries.push({
        name: key,
        transponders: _.sortBy(transpondersGroupByCountry[key], 'name'),
      });
    });
    return _.sortBy(countries, 'name');
  },
  forwardTransponders() {
    // Here we get our template instance from Template.instance() and
    // can access transponders from it
    let fwdTransponders = _.sortBy(_.where(Template.instance().transponderList.get(), { path: 'forward' }), 'name');
    let viewingTransponder = Template.currentData().transponder;
    if(viewingTransponder) {
      fwdTransponders.forEach((tp) => {
        if (tp._id === viewingTransponder._id) {
          tp.activeStatus = 'active';
        }
      });
    }
    return fwdTransponders;
  },
  returnTransponders() {
    // Here we get our template instance from Template.instance() and
    // can access transponders from it
    let rtnTransponders = _.sortBy(_.where(Template.instance().transponderList.get(), { path: 'return' }), 'name');
    let viewingTransponder = Template.currentData().transponder;
    if(viewingTransponder) {
      rtnTransponders.forEach((tp) => {
        if (tp._id === viewingTransponder._id) {
          tp.activeStatus = 'active';
        }
      });
    }
    return rtnTransponders;
  },
});

Template.htsTransponderList.events({
  'change select': function(event, template) {
    let country = $(event.target).val();
    if(country) {
      let transponders = Transponders.find({ country: country }).fetch();
      template.transponderList.set(transponders);
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