/**
 * Created by Thanat on 4/8/2559.
 */

import { Bucs } from './bucs.js';

const standardBucSize = [1, 2, 4, 6, 8, 10, 20, 40];

Meteor.methods({
  'fillInitialBucsData'() {
    if (Bucs.find().count() === 0) {
      // Validate and insert Thaicom 4 Bucs
      standardBucSize.forEach((size) => {
        const buc = {
          name: `Standard BUC ${size} W`,
          vendor: 'Standard',
          sizingInWatts: size,
          outputBackoff: -0.5,
        };
        ValidateBuc(buc);
        Bucs.insert(buc);
      });
    }
  },
});

function ValidateBuc(buc) {
    check(buc, Bucs.schema);
    console.log(`${buc.name} check result: ${Match.test(buc, Bucs.schema)}`);
}