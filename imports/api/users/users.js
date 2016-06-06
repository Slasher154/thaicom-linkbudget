/**
 * Created by Thanat on 6/6/2559.
 */

// Publications

if (Meteor.isServer) {
  Meteor.publish('user.profile', function () {
    return Meteor.users.find({
      _id: this.userId
    }, {
      fields: {
        firstName: 1,
        lastName: 1,
        bu: 1,
        dp: 1,
        position: 1,
      },
    });
  });
}


Meteor.users.helpers({
  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
});