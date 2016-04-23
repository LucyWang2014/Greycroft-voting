Template.InsertVote.events({
});

Template.InsertVote.helpers({
    currentCompanyId: function() {
    var controller = Router.current();
    // return the _id parameter or whatever
    return controller.params._id;
  }
});

AutoForm.addHooks('insertVoteForm', {
  onSuccess: function(operation, result, template) {
  	var path = Router.current().route.path(this);
  	console.log(path)
    Router.go('votedSuccessfully');
  }
});
