import {Mongo} from "meteor/mongo";
import {SimpleSchema} from "meteor/aldeed:simple-schema";
import AssumptionsSchema from "../assumptions/Assumptions";

Stakeholders = new Mongo.Collection('stakeholders');

Stakeholders.allow({
    insert(userId, doc) {
        return doc.createdBy === userId;
    },
    update(userId, doc) {
        return doc.createdBy === userId;
    },
    remove(userId, doc) {
        return doc.createdBy === userId;
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
    problem: {
        type: String
    },
    value: {
        type: String
    },
    solution: {
        type: String
    },
    descriptionAssumptions: {
        type: [SimpleSchema.RegEx.Id],
        optional: true
    },
    problemAssumptions: {
        type: [SimpleSchema.RegEx.Id],
        optional: true
    },
    solutionAssumptions: {
        type: [SimpleSchema.RegEx.Id],
        optional: true
    },
    valueAssumptions: {
        type: [SimpleSchema.RegEx.Id],
        optional: true
    }
});

Stakeholders.attachSchema(stakeholdersSchema);

Stakeholders.attachBehaviour("timestampable");