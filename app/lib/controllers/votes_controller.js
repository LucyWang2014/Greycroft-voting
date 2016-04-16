VoteController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('votes', Meteor.userId());
  },

  data: function () {
    return Votes.findOne({_id: this.params._id});
  },

  insert: function () {
    this.render('InsertVote', {});
  },

  list: function() {
    this.render('VotesList', {});
  },

  edit: function() {
    this.render('EditVote', {});
  }
});
