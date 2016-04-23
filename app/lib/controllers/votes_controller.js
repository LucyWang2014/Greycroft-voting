VoteController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('votes');
  },

  data: function() {
        return Votes.findOne({_id: this.params._id});
  },

  insert: function () {
    this.render('InsertVote', {});
  },

  list: function() {
    this.render('VotesResult', {});
  },

  edit: function() {
    this.render('EditVote', {});
  },
  
  action: function() {
    this.render('VotedSuccessfully', {});
  }
});
