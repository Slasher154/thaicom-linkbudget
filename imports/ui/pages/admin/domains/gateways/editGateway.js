/**
 * Created by Thanat on 9/8/2559.
 */

import './editGateway.html';
import { Gateways } from '/imports/api/domains/gateways/gateways.js';

Template.editGateway.onCreated(function () {

  // Get the viewing gateway from URL and subscribe to that band
  this.autorun(() => {
    // The viewing band is the value from the URL ex. '1V'
    let viewingGatewayId = FlowRouter.getParam('_id');

    // Subscribe this gateway
    this.subscribe('singleGatewayFromId', viewingGatewayId);
  });
});

Template.editGateway.helpers({
  gatewayName() {
    return `Gateway: ${Gateways.findOne().name}`;
  },
  gateways() {
    return Gateways;
  },
  gateway() {
    return Gateways.findOne();
  },
});