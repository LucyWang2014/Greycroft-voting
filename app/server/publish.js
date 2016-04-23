/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('companies', function () {
  return Companies.find({});
});

Meteor.publish('userList', function (){ 
  return Meteor.users.find({});
});

Meteor.publish('votes', function () {
  return Votes.find({});
});

