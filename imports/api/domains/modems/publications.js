/**
 * Created by Thanat on 22/7/2559.
 */

import { Modems } from './modems.js';

// All Modems
Meteor.publish('allModems', function () {
  if (this.userId) {
    return Modems.find();
  }
  return this.ready();
})