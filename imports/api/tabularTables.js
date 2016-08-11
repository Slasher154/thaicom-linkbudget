/**
 * Created by Thanat on 9/8/2559.
 */

import { FlowRouter } from 'meteor/kadira:flow-router';

import { Antennas } from './domains/antennas/antennas.js';
import { FrequencyBands } from './domains/frequencyBands/frequencyBands.js';
import { Gateways } from './domains/gateways/gateways.js';
import { Countries } from './domains/countries/countries.js';


TabularTables = {};

TabularTables.allAntennas = new Tabular.Table({
  name: 'allAntennas',
  collection: Antennas,
  columns: [
    { data: 'name', title: 'Name' },
    { data: 'vendor', title: 'Vendor' },
    { data: 'diameter', title: 'Diameter (m)' },
    { data: 'antennaType', title: 'Antenna Type' },
    { data: 'frequencyBandsName',
      title: 'Frequency Band',
      render: function(val, type, doc) {
        let text = '';
        val.forEach((band) => {
          text += `${band} `;
        });
        return text;
      },
    },
    {
      data: 'slug',
      title: 'Actions',
      render: function(val, type, doc) {
        const editAntennaPath = FlowRouter.path('editAntenna', { antennaName: val });
        return `<a class="btn btn-xs btn-default" href="${editAntennaPath}">Edit</a>`;
      },
    },
  ],
});

TabularTables.allFrequencyBands = new Tabular.Table({
  name: 'allFrequencyBands',
  collection: FrequencyBands,
  columns: [
    { data: 'name', title: 'Name' },
    { data: 'uplinkFrequencyRanges',
      title: 'Uplink Frequency Ranges (GHz)',
      render: function(val, type, doc) {
        let text = '';
        val.forEach((band) => {
          text += `${band.startFrequency}-${band.stopFrequency} `;
        });
        return text;
      },
    },
    { data: 'downlinkFrequencyRanges',
      title: 'Downlink Frequency Ranges (GHz)',
      render: function(val, type, doc) {
        let text = '';
        val.forEach((band) => {
          text += `${band.startFrequency}-${band.stopFrequency} `;
        });
        return text;
      },
    },
    {
      data: 'slug',
      title: 'Actions',
      render: function(val, type, doc) {
        const editFrequencyBandPath = FlowRouter.path('editFrequencyBand', { band: val });
        return `<a class="btn btn-xs btn-default" href="${editFrequencyBandPath}">Edit</a>`;
      },
    },
  ],
});

TabularTables.allGateways = new Tabular.Table({
  name: 'allGateways',
  collection: Gateways,
  pub: 'tabularAllGateways',
  extraFields: ['antennaId', 'countryId'],
  columns: [
    { data: 'name', title: 'Name' },
    { data: 'city', title: 'City' },
    { data: 'countryName()',
      title: 'Country',
    },
    { data: 'latitude', title: 'Latitude' },
    { data: 'longitude', title: 'Longitude' },
    { data: 'priority',
      title: 'Main/Diversity',
    },
    {
      data: 'antennaDiameter()',
      title: 'Antenna Size (m)',
    },
    {
      data: 'slug',
      title: 'Actions',
      render: function(val, type, doc) {
        const editGatewayPath = FlowRouter.path('editGateway', { gatewayName: val });
        return `<a class="btn btn-xs btn-default" href="${editGatewayPath}">Edit</a>`;
      },
    },
  ],
})
