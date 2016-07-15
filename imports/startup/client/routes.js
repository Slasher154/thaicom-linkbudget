/**
 * Created by Thanat on 11/5/2559.
 */

import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Roles } from 'meteor/alanning:roles';

// Import to load these templates
import '../../ui/layouts/main-layout.js';
import '../../ui/components/app-loading/appLoading.js';
import '../../ui/pages/accounts/login.js';
import '../../ui/pages/dashboard/dashboard.js';
import '../../ui/pages/index/index.js';
import '../../ui/pages/contour-plot/contour-plot.js';
import '../../ui/pages/notfound/notfound.js';
import '../../ui/pages/access_denied/access-denied.js';

// Domains page
import '../../ui/pages/domains/satellites/show-all-satellites.js';
import '../../ui/pages/domains/satellites/show-single-satellite.js';
import '../../ui/pages/domains/transponders/show-single-transponder.js';
import '../../ui/pages/domains/transponders/add-new-transponder.js';

// Manage the FlowRouter routes suggested by https://medium.com/@satyavh/using-flow-router-for-authentication-ba7bb2644f42#.pgc0y06tx

let exposed = FlowRouter.group({});

// Configure route for login page
exposed.route('/login', {
  name: 'login',
  action() {
    BlazeLayout.render('login');
  },
});

// Following routes require user to log in

let loggedIn = FlowRouter.group({
  triggersEnter: [function () {
    //console.log('Route being checked.');
    //console.log(Meteor.loggingIn());
    //console.log(Meteor.userId());
    if (!Meteor.loggingIn() && !Meteor.userId()) {
      //console.log('User is not logged in');
      let route = FlowRouter.current();
      if (route.route.name !== 'login') {
        Session.set('redirectAfterLogin', route.path);
      }
      return FlowRouter.go('login');
    }
  }]
});

loggedIn.route('/', {
  name: 'index',
  action() {
    BlazeLayout.render('mainLayout',{ content: 'index' });
  },
});

// Dashboard route => '/dashboard'
loggedIn.route('/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render('mainLayout', { content: 'dashboard' });
  },
});

// Contour Plot => '/contour-plot'
loggedIn.route('/contour-plot', {
  name: 'contour-plot',
  action() {
    BlazeLayout.render('mainLayout', { content: 'contourPlotPage' });
  },
});

// Logout Route => '/logout'
loggedIn.route('/logout', {
  name: 'logout',
  action(){
    Meteor.logout(function(){
      FlowRouter.go('login');
    })
  }
});

// --------------------------------------Resources Routes---------------------------------------------------

loggedIn.route('/satellite/:satelliteName', {
  name: 'showSingleSatellite',
  action() {
    BlazeLayout.render('mainLayout', { content: 'showSingleSatellite' });
  },
});

loggedIn.route('/satellite/:satelliteName/:transponderName', {
  name: 'showSingleTransponder',
  action() {
    BlazeLayout.render('mainLayout', { content: 'showSingleTransponder' });
  },
});

// -------------------------------------End of Resources Routes---------------------------------------------

// Only admin can access following routes
let admin = loggedIn.group({
  prefix: '/admin',
  triggersEnter: [function () {
    //console.log('User roles = ' + Roles.getRolesForUser(Meteor.userId()));
    if (!Roles.userIsInRole(Meteor.userId(), ['admin'])) {
      //console.log('User is not admin');
      return FlowRouter.go('access-denied');
    }
  }]
});

// Domain routes
let domain = admin.group({
  prefix: '/domain',
});

// --------------------------------------Satellite Domain Routes ---------------------------------

domain.route('/satellites', {
  name: 'showAllSatellites',
  action() {
    BlazeLayout.render('mainLayout', { content: 'showAllSatellites' });
  },
});

/*
domain.route('/satellites/:satelliteName', {
  name: 'showSingleSatellite',
  action() {
    var satelliteName = FlowRouter.getParam('satelliteName');
    BlazeLayout.render('mainLayout', { content: 'showSingleSatellite' });
  },
});
*/
// --------------------------------End of Satellite Domain Routes ---------------------------------

// --------------------------------------Transponder Domain Routes ---------------------------------

domain.route('/transponder/add', {
  name: 'addNewTransponder',
  action() {
    BlazeLayout.render('mainLayout', { content: 'addNewTransponder' });
  },
});


// Access Denied route
FlowRouter.route('/access-denied', {
  name: 'access-denied',
  action() {
    BlazeLayout.render('accessDenied');
  },
});

// Not found route
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('notFound');
  },
};