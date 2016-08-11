/**
 * Created by Thanat on 26/7/2559.
 */

import { FrequencyBands } from './frequencyBands.js';

let frequencyBands = [
  {
    name: 'C-Band',
    downlinkFrequencyRanges: [
      {
        startFrequency: 3.6,
        stopFrequency: 4.2,
      },
    ],
    uplinkFrequencyRanges: [
      {
        startFrequency: 5.85,
        stopFrequency: 6.425,
      },
    ],
  },
  {
    name: 'Ku-Band',
    downlinkFrequencyRanges: [
      {
        startFrequency: 10.95,
        stopFrequency: 12.75,
      },
    ],
    uplinkFrequencyRanges: [
      {
        startFrequency: 13.75,
        stopFrequency: 14.5,
      },
    ],
  },
  {
    name: 'Ka-Band',
    downlinkFrequencyRanges: [// From ITU Regulations
      {
        startFrequency: 17.7,
        stopFrequency: 21.2,
      },
    ],
    uplinkFrequencyRanges: [
      {
        startFrequency: 27, // 27 GHz on Thaicom 4
        stopFrequency: 31,
      },
    ],
  },
];

Meteor.methods({
  'fillInitialFrequencyBandsData'() {
    if (FrequencyBands.find().count() === 0) {
      // Validate and insert Thaicom 4 FrequencyBands
      ValidateFrequencyBands(frequencyBands);
      frequencyBands.forEach((frequencyBand) => FrequencyBands.insert(frequencyBand));
    }
  },
});

function ValidateFrequencyBands(arrayOfFrequencyBands) {
  arrayOfFrequencyBands.forEach((doc) => {
    check(doc, FrequencyBands.schema);
    console.log(`${doc.name} check result: ${Match.test(doc, FrequencyBands.schema)}`);
  });
}