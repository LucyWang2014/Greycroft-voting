Template.CompaniesList.events({
});

Template.CompaniesList.helpers({
  companies: function () {
    return Companies.find();
  },

  CreatedDateFormatted: function () {
    return moment(this.createdAt).format("MMM Do YY");
  },

  statusPassed: function() {
    if (this.status === 'Passed')
      return true;
    else
      return false;
  },

  statusDiligence: function() {
    if (this.status === 'diligence')
      return true;
    else
      return false;
  },

  statusInvested: function() {
    if (this.status === 'Invested')
      return true;
    else
      return false;
  }
});
