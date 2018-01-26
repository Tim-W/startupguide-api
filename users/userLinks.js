import Companies from "../companies/companies"

Meteor.users.addLinks({
    "company": {
        type: "one",
        collection: Companies,
        field: "profile.company"
    }
});

Companies.addLinks({
    users: {
        collection: Meteor.users,
        inversedBy: "company"
    }
});