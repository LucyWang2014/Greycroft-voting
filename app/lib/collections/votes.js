Votes = new Mongo.Collection('votes');

Votes.attachSchema(new SimpleSchema({
  title:{
    type: String,
    label: "Title",
    max: 100
  },
  description:{
    type: String,
    label: "Description",
    max: 1024
  },
  dueDate:
  {
    type: Date,
    label: "Due Date",
    optional: true
  },
  priority:
  {
    type: String,
    label: "Priority",
    allowedValues: ['High', 'Medium', 'Low'],
    optional: true
  },
  createdBy: {
    type: String,
    autoValue: function() {
       return this.userId
    }
  }
}));

if (Meteor.isServer) {
  Votes.allow({
    insert: function (userId, doc) {
      return userId;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return userId;
    },

    remove: function (userId, doc) {
      return userId;
    }
  });
}