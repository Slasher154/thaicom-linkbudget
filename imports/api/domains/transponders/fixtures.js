/**
 * Created by Thanat on 14/7/2559.
 */

// Fill transponder database with pre-defined data if the database is empty

import { forwardTransponders, returnTransponders } from './thaicom4-fixtures.js';
import { thaicom5Transponders } from './thaicom5-fixtures.js';
import { thaicom6Transponders } from './thaicom6-fixtures.js';
import { thaicom7Transponders } from './thaicom7-fixtures.js';
import { Transponders } from './transponders.js';

Meteor.methods({
  'fillInitialTranspondersData'() {
    if (Transponders.find().count() === 0) {
      // Validate and insert Thaicom 4 - Forward + Broadcast beams
      ValidateTransponders(forwardTransponders);
      forwardTransponders.forEach((transponder) => Transponders.insert(transponder));

      // Validate and insert Thaicom 4 - Return beams
      ValidateTransponders(returnTransponders);
      returnTransponders.forEach((transponder) => Transponders.insert(transponder));

      // Validate and insert Thaicom 5 Transponders
      ValidateTransponders(thaicom5Transponders);
      thaicom5Transponders.forEach((transponder) => Transponders.insert(transponder));

      // Validate and insert Thaicom 6 Transponders
      ValidateTransponders(thaicom6Transponders);
      thaicom6Transponders.forEach((transponder) => Transponders.insert(transponder));

      // Validate and insert Thaicom 7 Transponders
      ValidateTransponders(thaicom7Transponders);
      thaicom7Transponders.forEach((transponder) => Transponders.insert(transponder));

    }
  },
});

function ValidateTransponders(arrayOfTransponders) {
  arrayOfTransponders.forEach((doc) => {
    check(doc, Transponders.schema);
    console.log(`${doc.name}-${doc.path} check result: ${Match.test(doc, Transponders.schema)}`);
  });
}

