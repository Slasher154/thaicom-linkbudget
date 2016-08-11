/**
 * Created by Thanat on 22/7/2559.
 */

import { Modems } from './modems.js';

let modems = [{
  "name": "Comtech CDM750 ",
  "vendor": "Comtech",
  "applications": [{
    "name": "SCPC",
    "linkType": ['outbound','inbound'],
    "acm": true,
    "defaultLinkMargin": 2,
    "minimumSymbolRate": 1,
    "maximumSymbolRate": 63000,
    "availableRollOffFactors": [1.2],
    "defaultRollOffFactor": 1.2,
    "mcgs": [{ "name": "QPSK 1/2", "spectralEfficiency": 1, "requiredEsNo": 1.4 }, {
      "name": "QPSK 3/5",
      "spectralEfficiency": 1.2,
      "requiredEsNo": 2.7
    }, { "name": "QPSK 2/3", "spectralEfficiency": 1.33, "requiredEsNo": 3.4 }, {
      "name": "QPSK 3/4",
      "spectralEfficiency": 1.5,
      "requiredEsNo": 4.6
    }, { "name": "QPSK 4/5", "spectralEfficiency": 1.6, "requiredEsNo": 5.1 }, {
      "name": "QPSK 5/6",
      "spectralEfficiency": 1.67,
      "requiredEsNo": 5.6
    }, { "name": "QPSK 8/9", "spectralEfficiency": 1.78, "requiredEsNo": 6.7 }, {
      "name": "QPSK 9/10",
      "spectralEfficiency": 1.8,
      "requiredEsNo": 6.8
    }, { "name": "8PSK 2/3", "spectralEfficiency": 2, "requiredEsNo": 7.4 }, {
      "name": "8PSK 3/4",
      "spectralEfficiency": 2.25,
      "requiredEsNo": 8.5
    }, { "name": "16APSK 2/3", "spectralEfficiency": 2.67, "requiredEsNo": 9.9 }, {
      "name": "16APSK 3/4",
      "spectralEfficiency": 3,
      "requiredEsNo": 11.2
    }, { "name": "16APSK 4/5", "spectralEfficiency": 3.2, "requiredEsNo": 12 }, {
      "name": "16APSK 5/6",
      "spectralEfficiency": 3.33,
      "requiredEsNo": 12.4
    }, { "name": "16APSK 8/9", "spectralEfficiency": 3.56, "requiredEsNo": 13.8 }, {
      "name": "16APSK 9/10",
      "spectralEfficiency": 3.6,
      "requiredEsNo": 14
    }]
  }],
}];


Meteor.methods({
  'fillInitialModemsData'() {
    if (Modems.find().count() === 0) {
      ValidateModems(modems);
      modems.forEach((modem) => Modems.insert(modem));
    }
  }
});

function ValidateModems(arrayOfModems) {
  arrayOfModems.forEach((doc) => {
    check(doc, Modems.schema);
    console.log(`${doc.name} check result: ${Match.test(doc, Modems.schema)}`);
  });
}