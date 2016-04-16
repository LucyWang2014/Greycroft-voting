UserController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('users', Meteor.userId());
  },

  data: function () {
    return Users.findOne({_id: this.params._id});
  },

  insert: function () {
    this.render('InsertUser', {});
  },

  list: function() {
    this.render('UsersList', {});
  },

  edit: function() {
    this.render('EditUser', {});
  }
});
