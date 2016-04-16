/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('companies', function (userId) {
  return Companies.find({createdBy: userId});
});

Meteor.publish('users', function (userId) {
  return users.find({createdBy: userId});
});
