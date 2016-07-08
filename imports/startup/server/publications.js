/**
 * Created by Thanat on 4/7/2559.
 */

// import all publications here
import '../../api/domains/satellites/publications.js';

Meteor.methods({
  //TODO: Move this away. Perform Check as well.!!
  'insertSatellite'(doc) {
    console.log(doc);
  },
});