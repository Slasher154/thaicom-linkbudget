/**
 * Created by Thanat on 11/5/2559.
 */

import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
import '../../ui/layouts/main-layout.js';
import '../../ui/pages/accounts/login.js';
import '../../ui/pages/dashboard/dashboard.js';
import '../../ui/pages/index/index.js';
import '../../ui/pages/notfound/notfound.js';

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
    console.log('Route being checked.');
    console.log(Meteor.loggingIn());
    console.log(Meteor.userId());
    if (!Meteor.loggingIn() && !Meteor.userId()) {
      console.log('User is not logged in');
      let route = FlowRouter.current();
      if (route.route.name !== 'login') {
        Session.set('redirectAfterLogin', route.path);
      }
      return FlowRouter.go('login');
    }
  }]
});

loggedIn.route('/', {
  name: '',
  action() {
    BlazeLayout.render('mainLayout',{ content: 'index' });
  },
});

loggedIn.route('/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render('mainLayout', { content: 'dashboard' });
  },
});

// Logout Route => /logout
loggedIn.route('/logout', {
  name: 'logout',
  action(){
    Meteor.logout(function(){
      FlowRouter.go('login');
    })
  }
});

// Not found route
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('mainLayout', { content: 'notFound' });
  },
};


