Template.VotedSuccessfully.events({
});

Template.VotedSuccessfully.helpers({
	currentId: function() {
		return Router.current().params._id
	}
});
