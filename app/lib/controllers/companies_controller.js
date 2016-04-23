CompanyController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('companies');
  },

  data: function () {
    return Companies.findOne({_id: this.params._id});
  },

  insert: function () {
    this.render('InsertCompany', {});
  },

  list: function() {
    this.render('CompaniesList', {});
  },

  edit: function() {
    this.render('EditCompany', {});
  }
});
