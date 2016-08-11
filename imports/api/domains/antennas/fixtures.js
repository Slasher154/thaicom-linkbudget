/**
 * Created by Thanat on 27/7/2559.
 */

import { Antennas } from './antennas.js';

const cBandStandardAntennaSize = [1.8, 2.4, 3.8, 4.5];
const kuBandStandardAntennaSize = [0.6, 0.75, 0.9, 1, 1.2, 1.5, 1.8, 2.4];
const kaBandStandardAntennaSize = [0.6, 0.75, 0.9, 1, 1.2, 1.5];

const thaicom4MainGateway = [
  { city: 'Shanghai', priority: 'Main' },
  { city: 'Seoul', priority: 'Main' },
  { city: 'Manila', priority: 'Diversity' },
  { city: 'Manila', priority: 'Main' },
  { city: 'Kuala Lumpur', priority: 'Diversity' },
  { city: 'Kuala Lumpur', priority: 'Main' },
  { city: 'Taipei', priority: 'Main' },
  { city: 'Hanoi', priority: 'Diversity' },
  { city: 'Hanoi', priority: 'Main' },
  { city: 'Auckland', priority: 'Main' },
  { city: 'Rangoon', priority: 'Diversity' },
  { city: 'Rangoon', priority: 'Main' },
  { city: 'Phnom Penh', priority: 'Diversity' },
  { city: 'Phnom Penh', priority: 'Main' },
  { city: 'Delhi', priority: 'Diversity' },
  { city: 'Delhi', priority: 'Main' },
  { city: 'Bombay', priority: 'Diversity' },
  { city: 'Bombay', priority: 'Main' },
  { city: 'Kaerai', priority: 'Diversity' },
  { city: 'LLK', priority: 'Main' },
  { city: 'Beijing', priority: 'Main' },
  { city: 'Guangzhou', priority: 'Diversity' },
  { city: 'Guangzhou', priority: 'Main' },
  { city: 'Jakarta', priority: 'Diversity' },
  { city: 'Jakarta', priority: 'Main' },
  { city: 'Maruyama', priority: 'Diversity' },
  { city: 'Tokyo', priority: 'Main' },
  { city: 'Kalgoorie', priority: 'Main' },
  { city: 'Broken Hill', priority: 'Main' },
];

const thaicom4BroadcastGatewayCities = [
  'Delhi',
  'Bombay',
  'Hanoi',
  'LLK',
  'Beijing',
  'Shanghai',
  'Guangzhou',
  'Taipei',
  'Tokyo',
  'Kalgoorie',
  'Auckland',
  'Kuala Lumpur',
  'Jakarta',
  'Manila',
];
const thaicom5GatewayAntenna = [
  {
    name: 'Thaicom 5 Ku-Band Main Gateway Antenna',
    vendor: 'Standard',
    frequencyBandsName: ['ku-band'],
    antennaType: 'parabolic',
    diameter: 11,
    polarizations: ['V', 'H'],
    isGatewayAntenna: true,
    autoTracking: true,
  },
  {
    name: 'Thaicom 5 Ku-Band Diversity Gateway Antenna',
    vendor: 'Standard',
    frequencyBandsName: ['ku-band'],
    antennaType: 'parabolic',
    diameter: 7.2,
    polarizations: ['V', 'H'],
    isGatewayAntenna: true,
    autoTracking: true,
  },
  {
    name: 'Thaicom 5 C-Band Main Gateway Antenna',
    vendor: 'Standard',
    frequencyBandsName: ['c-band'],
    antennaType: 'parabolic',
    diameter: 11,
    polarizations: ['V', 'H'],
    isGatewayAntenna: true,
    autoTracking: true,
  },
];
const thaicom6GatewayAntenna = [
  {
    name: 'Thaicom 6 Ku-Band Main Gateway Antenna',
    vendor: 'Standard',
    frequencyBandsName: ['ku-band'],
    antennaType: 'parabolic',
    diameter: 7.6,
    polarizations: ['V', 'H'],
    isGatewayAntenna: true,
    autoTracking: true,
  },
  {
    name: 'Thaicom 6 Ku-Band Diversity Gateway Antenna',
    vendor: 'Standard',
    frequencyBandsName: ['ku-band'],
    antennaType: 'parabolic',
    diameter: 3.8,
    polarizations: ['V', 'H'],
    isGatewayAntenna: true,
    autoTracking: true,
  },
  {
    name: 'Thaicom 6 C-Band Main Gateway Antenna',
    vendor: 'Standard',
    frequencyBandsName: ['c-band'],
    antennaType: 'parabolic',
    diameter: 11,
    polarizations: ['V', 'H'],
    isGatewayAntenna: true,
    autoTracking: true,
  },
];

const thaicom7GatewayAntenna = [
  {
    name: 'Thaicom 7 C-Band Main Gateway Antenna',
    vendor: 'Standard',
    frequencyBandsName: ['c-band'],
    antennaType: 'parabolic',
    diameter: 9.2,
    polarizations: ['V', 'H'],
    isGatewayAntenna: true,
    autoTracking: true,
  },
];

const thaicom8GatewayAntenna = [
  {
    name: 'Thaicom 8 Ku-Band Main Gateway Antenna',
    vendor: 'Standard',
    frequencyBandsName: ['ku-band'],
    antennaType: 'parabolic',
    diameter: 7.6,
    polarizations: ['V', 'H'],
    isGatewayAntenna: true,
    autoTracking: true,
  },
  {
    name: 'Thaicom 8 Ku-Band Diversity Gateway Antenna',
    vendor: 'Standard',
    frequencyBandsName: ['ku-band'],
    antennaType: 'parabolic',
    diameter: 3.8,
    polarizations: ['V', 'H'],
    isGatewayAntenna: true,
    autoTracking: true,
  },
];


Meteor.methods({
  'fillInitialAntennasData'() {
    if (Antennas.find().count() === 0) {

      // Insert C-Band antennas
      cBandStandardAntennaSize.forEach((size) => {
        let antenna = {
          name: `Standard C-Band ${size} m.`,
          vendor: 'Standard',
          frequencyBandsName: ['c-band'],
          antennaType: 'parabolic',
          diameter: size,
          polarizations: ['V', 'H'],
        };
        Antennas.insert(antenna);
      });

      // Insert Ku-Band antennas
      kuBandStandardAntennaSize.forEach((size) => {
        let antenna = {
          name: `Standard Ku-Band ${size} m.`,
          vendor: 'Standard',
          frequencyBandsName: ['ku-band'],
          antennaType: 'parabolic',
          diameter: size,
          polarizations: ['V', 'H'],
        };
        Antennas.insert(antenna);
      });

      // Insert Ku-Band antennas
      kaBandStandardAntennaSize.forEach((size) => {
        let antenna = {
          name: `Standard Ka-Band ${size} m.`,
          vendor: 'Standard',
          frequencyBandsName: ['ka-band'],
          antennaType: 'parabolic',
          diameter: size,
          polarizations: ['V', 'H'],
        };
        Antennas.insert(antenna);
      });

      // Insert Thaicom 4 gateway antennas
      thaicom4MainGateway.forEach((gateway) => {
        let antenna = {
          name: `${gateway.city} Thaicom 4 ${gateway.priority} Gateway Antenna`,
          vendor: 'Standard',
          frequencyBandsName: ['ku-band', 'ka-band'],
          antennaType: 'parabolic',
          diameter: 8.1,
          polarizations: ['H', 'V'],
          isGatewayAntenna: true,
          autoTracking: true,
        };
        Antennas.insert(antenna);
      });

      // Insert Thaicom 4 broadcast gateway antennas
      thaicom4BroadcastGatewayCities.forEach((city) => {
        let antenna = {
          name: `${city} Thaicom 4 Broadcast Beam Gateway Antenna`,
          vendor: 'Standard',
          frequencyBandsName: ['ku-band'],
          antennaType: 'parabolic',
          diameter: 7.6,
          polarizations: ['H', 'V'],
          isGatewayAntenna: true,
          autoTracking: true,
        };
        Antennas.insert(antenna);
      });

      // Insert Thaicom 5 gateway antenna
      thaicom5GatewayAntenna.forEach((antenna) => {
        Antennas.insert(antenna);
      });

      // Insert Thaicom 6 gateway antenna
      thaicom6GatewayAntenna.forEach((antenna) => {
        Antennas.insert(antenna);
      });

      // Insert Thaicom 7 gateway antenna
      thaicom7GatewayAntenna.forEach((antenna) => {
        Antennas.insert(antenna);
      });

      // Insert Thaicom 8 gateway antenna
      thaicom8GatewayAntenna.forEach((antenna) => {
        Antennas.insert(antenna);
      });

    }
  },
});
