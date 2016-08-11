/**
 * Created by Thanat on 9/8/2559.
 */
import './showAllGateways.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Gateways } from '/imports/api/domains/gateways/gateways.js';
import { Satellites } from '/imports/api/domains/satellites/satellites.js';

Template.showAllGateways.onCreated(function () {
  Meteor.subscribe('allGateways');
});

Template.showAllGateways.helpers({
  settings() {
    return {
      collection: Gateways,
      fields: [
        { key: 'name', label: 'Name' },
        { key: 'city', label: 'City' },
        { key: 'countryName', label: 'Country' },
        { key: 'antennaDiameter', label: 'Antenna Diameter (m)'},
        { key: 'latitude', label: 'Latitude' },
        { key: 'longitude', label: 'Longitude' },
        { key: 'satelliteName', label: 'Satellite'},
        { key: 'slug', label: 'Actions', tmpl: Template.editGatewayButton },
      ],
      filters: ['normalFilter', 'satelliteFilter'],
    };
  },
});

Template.editGatewayButton.helpers({
  editGatewayPath() {
    return FlowRouter.path('editGateway', { _id: this._id, gatewayName: this.slug });
  }
})

Template.satelliteFilter.onCreated(function () {
  this.filter = new ReactiveTable.Filter('satelliteFilter', ['satelliteName']);
})

Template.satelliteFilter.helpers({
  satellites() {
    return Satellites.find({}, { sort: { name: 1 } });
  }
});

Template.satelliteFilter.events({
  'click .satellite-filter-input .btn': function (event, template) {
    let input = $(event.target).text();
    console.log(input + ' clicked');
    template.filter.set(input);
  },
})
