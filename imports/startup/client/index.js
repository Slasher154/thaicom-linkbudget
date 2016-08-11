/**
 * Created by Thanat on 11/5/2559.
 */

// Configure user accounts
import './useraccounts-configuration.js';

// Import all routes (URL) of this application
import './routes.js';

// Import Global Template Helpers to be used in the application
import './global-helpers.js';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { Roles } from 'meteor/alanning:roles';

// Make FlowRouter to wait the roles subscription to be ready before routing so the route authorization based on
// roles works as expected
// Source: https://medium.com/@satyavh/using-flow-router-for-authentication-ba7bb2644f42#.ceusvcdm0

FlowRouter.wait();

Tracker.autorun(function() {
  if (Roles.subscription.ready() && !FlowRouter._initialized) {
    FlowRouter.initialize();
  }
});

// Initialize TabularTable parameter
TabularTables = {};