Votes = new Mongo.Collection('votes');

Votes.attachSchema(new SimpleSchema({
  CompanyId:{
    type: String,
    denyUpdate: true
  },
  createdBy: {
    type: String,
    autoValue: function() {
       return this.userId
    }
  },
  team_score: {
    type: Number,
    label: "Team Score",
    autoform: {
      type: "raty",
      label: true,
      ratyOptions: {},
    },
    optional: false
  },
  presentation_score: {
    type: Number,
    label: "Presentation Score",
    autoform: {
      type: "raty",
      label: true,
      ratyOptions: {},
    },
    optional: false
  },
  opportunity_score: {
    type: Number,
    label: "Opportunity Score",
    autoform: {
      type: "raty",
      label: true,
      ratyOptions: {},
    },
    optional: false
  },
  deal_score: {
    type: Number,
    label: "Team Score",
    autoform: {
      type: "select-radio-inline",
      options: function () {
        return [
          {label: "Strong No", value: 1},
          {label: "Mild No", value: 2},
          {label: "Mild Yes", value: 3},
          {label: "Strong Yes", value: 4}
        ];
      }
    },
    optional: false
  },
  fair_valuation: {
    type: Number,
    label: "Fair Valuation",
    min:0,
    autoform: {
      afFieldInput: {
        type: "number"
      }
    },
    optional: false
  },
  reach_valuation: {
    type: Number,
    label: "Reach Valuation",
    min:0,
    autoform: {
      afFieldInput: {
        type: "number"
      }
    },
    optional: false
  },
  concerns: {
    type: String,
    label: "Concerns"
  },
  comments: {
    type: String,
    label: "Comments"
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