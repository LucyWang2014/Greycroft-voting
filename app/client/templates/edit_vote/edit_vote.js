Template.EditVote.events({
});

Template.EditVote.helpers({
  currentCompanyId: function(){
    var fieldValue = Autoform.getFieldValue('CompanyId');
    return fieldValue
  }
});

AutoForm.addHooks('editVoteForm', {
  onSuccess: function(operation, result, template) {
    Router.go('votedSuccessfully');
  }
});

