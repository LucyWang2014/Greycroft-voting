Template.VotesResult.events({
});

Template.VotesResult.helpers({
	votes: function () {
	var controller = Router.current();
    var companyId = controller.params._id;
    return Votes.find({'CompanyId': companyId});
	}
});
