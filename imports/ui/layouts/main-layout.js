/**
 * Created by Thanat on 11/5/2559.
 */

import './main-layout.html';
import '../../api/api.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.mainLayout.rendered = function () {
  //$('.ui.sidebar').sidebar('toggle');
}

Template.mainLayout.helpers({
  name: function () {
    Meteor.subscribe('user.profile');
    const user = Meteor.user();
    if (user) {
      return user.fullName();
    }
    return '';
  },
  pathForLogout: function(){
    return FlowRouter.path('logout');
  },
})