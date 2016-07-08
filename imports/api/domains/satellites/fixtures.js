/**
 * Created by Thanat on 7/6/2559.
 */

// Fill satellite database with pre-defined data if the database is empty

import { Satellites } from './satellites.js';

// Thaicom Satellites

const thaicom4 = {
  name: 'Thaicom 4',
  alternateName: 'IPSTAR',
  orbitalSlot: 119.5,
  skb: 0.05,
  type: 'Broadband',
  isThaicom: true,
  isActive: true,
};

const thaicom5 = {
  name: 'Thaicom 5',
  orbitalSlot: 78.5,
  skb: 0.05,
  type: 'Conventional',
  isThaicom: true,
  isActive: true,
};

const thaicom6 = {
  name: 'Thaicom 6',
  orbitalSlot: 78.5,
  skb: 0.05,
  type: 'Conventional',
  isThaicom: true,
  isActive: true,
};

const thaicom7 = {
  name: 'Thaicom 7',
  alternateName: 'Asiasat 6',
  orbitalSlot: 120,
  skb: 0.05,
  type: 'Conventional',
  isThaicom: true,
  isActive: true,
};

const thaicom8 = {
  name: 'Thaicom 8',
  orbitalSlot: 78.5,
  skb: 0.05,
  type: 'Convetional',
  isThaicom: true,
  isActive: true,
};

// Non-Thaicom Satellites

const apstar7 = {
  name: 'Apstar 7',
  orbitalSlot: 76.5,
  type: 'Conventional',
  isThaicom: false,
  isActive: true,
};

const expressAM4 = {
  name: 'Express-AM4',
  orbitalSlot: 80,
  type: 'Conventional',
  isThaicom: false,
  isActive: true,
};

const telkom3 = {
  name: 'Telkom-3',
  orbitalSlot: 118,
  type: 'Conventional',
  isThaicom: false,
  isActive: true,
};

const asiasat4 = {
  name: 'Asiasat-4',
  orbitalSlot: 122,
  type: 'Conventional',
  isThaicom: false,
  isActive: true,
};

let thaicomSatellites = [thaicom4,
thaicom5,
thaicom6,
thaicom7,
thaicom8,
];

let nonThaicomSatellites = [apstar7,
telkom3,
expressAM4,
asiasat4,
];

let satellites = thaicomSatellites.concat(nonThaicomSatellites);

Meteor.methods({
  'Satellites.insert'() {
    if (Satellites.find().count() === 0) {
      satellites.forEach((satellite) => Satellites.insert(satellite));
    }
  },
});

