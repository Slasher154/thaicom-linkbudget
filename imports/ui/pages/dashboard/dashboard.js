/**
 * Created by Thanat on 2/6/2559.
 */

import './dashboard.html';

Template.dashboard.helpers({
  myNumber() {
    return Meteor.settings.public.myNumber;
  },
});