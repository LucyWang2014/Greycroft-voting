Template.EditCompany.events({
});

Template.EditCompany.helpers({
  beforeRemove: function () {
      return function (collection, id) {
        var doc = collection.findOne(id);
        if (confirm('Really delete issue: "' + doc.title + '"?')) {
          this.remove();
          Router.go('companiesList');
        }
      };
    }
});

AutoForm.addHooks(null, {
  onSuccess: function(operation, result, template) {
    Router.go('companiesList');
  }
});
