import {Mongo} from "meteor/mongo";
import {SimpleSchema} from "meteor/aldeed:simple-schema";

Stakeholders = new Mongo.Collection('stakeholders');

Stakeholders.allow({
    insert() {
        return true;
    },
    update() {
        return true;
    },
    remove() {
        return true;
    }
});

const stakeholdersSchema = new SimpleSchema({
    type: {
        type: String,
        allowedValues: [
            "User",
            "Customer",
            "Stakeholder",
            "Partner",
            "Other"
        ]
    },
    description: {
        type: String
    },
    descriptionAssumptions: {
        type: [String],
        optional: true
    },
    problem: {
        type: String
    },
    problemAssumptions: {
        type: [String],
        optional: true
    },
    value: {
        type: String
    },
    valueAssumptions: {
        type: [String],
        optional: true
    },
    solution: {
        type: String
    },
    solutionAssumptions: {
        type: [String],
        optional: true
    },
});

Stakeholders.attachSchema(stakeholdersSchema);