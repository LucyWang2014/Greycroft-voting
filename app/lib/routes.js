Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.route('/insert_company', {
  name: 'insertCompany',
  controller: 'CompanyController',
  action: 'insert',
  where: 'client'
});

Router.route('/company/vote', {
  name: 'insertVote',
  controller: 'VoteController',
  action: 'insert',
  where: 'client'
});

Router.route('/vote/:_id', {
  name: 'editVote',
  controller: 'VoteController',
  action: 'edit',
  where: 'client'
});

Router.route('/company_list', {
  name: 'companiesList',
  controller: 'CompanyController',
  action: 'list',
  where: 'client'
});

Router.route('/users_list', {
  name: 'usersList',
  controller: 'UserController',
  action: 'list',
  where: 'client'
});

Router.route('/company/:_id', {
  name: 'editCompany',
  controller: 'CompanyController',
  action: 'edit',
  where: 'client'
});

Router.onBeforeAction(function() {
  if (!Meteor.user()) {
    this.render('AccessDenied');
  } else
  {
     this.next();
  }
}, {only: ['companiesList', 'usersList','editVote','addVote']});

