/**
 * Created by Thanat on 11/5/2559.
 */

import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Roles } from 'meteor/alanning:roles';

// Import to load these templates
import '../../ui/layouts/mainLayout.js';
import '../../ui/components/appLoading/appLoading.js';
import '../../ui/pages/accounts/login.js';
import '../../ui/pages/dashboard/dashboard.js';
import '../../ui/pages/index/index.js';
import '../../ui/pages/contourPlot/contourPlot.js';
import '../../ui/pages/notfound/notfound.js';
import '../../ui/pages/accessDenied/accessDenied.js';

// Domains page
import '../../ui/pages/domains/satellites/showAllSatellites.js';
import '../../ui/pages/domains/satellites/showSingleSatellite.js';
import '../../ui/pages/domains/transponders/showSingleTransponder.js';
import '../../ui/pages/domains/transponders/addNewTransponder.js';
import '../../ui/pages/domains/frequencyBands/showAllFrequencyBands.js';
import '../../ui/pages/domains/antennas/showAllAntennas.js';
import '../../ui/pages/domains/gateways/showAllGateways.js';



// Admin page
import '../../ui/pages/admin/domains/frequencyBands/editFrequencyBand.js';
import '../../ui/pages/admin/domains/antennas/editAntenna.js';
import '../../ui/pages/admin/domains/gateways/editGateway.js';

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

// Contour Plot => '/contourPlot'
loggedIn.route('/contourPlot', {
  name: 'contourPlot',
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

loggedIn.route('/antennas', {
  name: 'showAllAntennas',
  action() {
    BlazeLayout.render('mainLayout', { content: 'showAllAntennas' });
  },
});

loggedIn.route('/frequency-bands', {
  name: 'showAllFrequencyBands',
  action() {
    BlazeLayout.render('mainLayout', { content: 'showAllFrequencyBands' });
  },
});

loggedIn.route('/gateways', {
  name: 'showAllGateways',
  action() {
    BlazeLayout.render('mainLayout', { content: 'showAllGateways' });
  }
});

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

// ------------------------------------- Admin Routes ----------------------------------------------

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

// --------------------------------------Satellite Domain Routes ---------------------------------

admin.route('/satellites', {
  name: 'showAllSatellites',
  action() {
    BlazeLayout.render('mainLayout', { content: 'showAllSatellites' });
  },
});

/*
admin.route('/satellites/:satelliteName', {
  name: 'showSingleSatellite',
  action() {
    var satelliteName = FlowRouter.getParam('satelliteName');
    BlazeLayout.render('mainLayout', { content: 'showSingleSatellite' });
  },
});
*/
// --------------------------------End of Satellite Domain Routes ---------------------------------

// --------------------------------------Transponder Domain Routes ---------------------------------

admin.route('/transponder/add', {
  name: 'addNewTransponder',
  action() {
    BlazeLayout.render('mainLayout', { content: 'addNewTransponder' });
  },
});

// --------------------------------------Frequency Band Domain Routes ---------------------------------

// Edit frequency band
admin.route('/frequency-bands/:band/edit', {
  name: 'editFrequencyBand',
  action() {
    BlazeLayout.render('mainLayout', { content: 'editFrequencyBand' });
  },
});

// --------------------------------------Antenna Domain Routes ---------------------------------

// Edit antenna
admin.route('/antennas/:antennaName/edit', {
  name: 'editAntenna',
  action() {
    BlazeLayout.render('mainLayout', { content: 'editAntenna' });
  },
});

// --------------------------------------Gateway Domain Routes ---------------------------------

// Edit gateway
admin.route('/gateways/:_id/:gatewayName/edit', {
  name: 'editGateway',
  action() {
    BlazeLayout.render('mainLayout', { content: 'editGateway' });
  },
});

// -------------------------------------End of Admin Routes ----------------------------------------------


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