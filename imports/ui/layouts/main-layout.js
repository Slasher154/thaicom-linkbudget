/**
 * Created by Thanat on 11/5/2559.
 */

import './main-layout.html';

// import these .js and .css to get Gentelella Styles
import '../../../public/assets/css/custom.css';
import '../../../public/assets/css/animate.min.css';
import '../../../public/assets/fonts/css/font-awesome.min.css';


// others
import '../../api/api.js';
import { FlowRouter } from 'meteor/kadira:flow-router';


// Add class to body for CSS
Template.body.onRendered = function () {
  $('body').addClass('nav-md');
};

Template.mainLayout.rendered = function () {
  //$('.ui.sidebar').sidebar('toggle');
  // Hide Admin Menu
  if (!Roles.userIsInRole(Meteor.userId(), ['admin'], '')) {
    console.log('This user is not admin');
    //$('.admin-menu').hide();
  }
};

Template.mainLayout.helpers({
  name: function () {
    Meteor.subscribe('user.profile');
    const user = Meteor.user();
    if (user) {
      return user.fullName();
    }
    return '';
  },
 })