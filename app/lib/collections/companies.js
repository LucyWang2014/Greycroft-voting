Companies = new Mongo.Collection('companies');


Companies.attachSchema(new SimpleSchema({
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
  amountRaised:{
    type: Number,
    label: "Amount Raise ($M)",
    min: 0
  },
  round:
  {
    type: String,
    label: "Round Raised",
    allowedValues: ['Seed', 'Bridge', 'Series A', 'Series B', 'Series C', 'Series D', 'Series E', 'Series E+'],
    optional: false
  },
  dealLead:
  {
    type: String,
    label: "Deal Lead",
    allowedValues: ['IS','JE','MT','DS','AP','EW'],
    optional: true
  },
  status:
  {
    type: String,
    label: "Status",
    allowedValues: ['Passed','Diligence','Invested'],
    optional: true
  },
 createdAt:
  {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },
  createdBy: {
    type: String,
    autoValue: function() {
       return this.userId
    }
  }
}));

if (Meteor.isServer) {
  Companies.allow({
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
