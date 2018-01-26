import {Mongo} from "meteor/mongo";
import {SimpleSchema} from "meteor/aldeed:simple-schema";

Ideas = new Mongo.Collection('ideas');

Ideas.allow({
    insert() {
        return true;
    },
    update(userId, doc) {
        if (doc.createdBy === userId) {
            return true;
        }
        return _.contains(doc.contributors, userId);
    },
    remove(userId, doc) {
        return doc.createdBy === userId;
    }
});

const ideasSchema = new SimpleSchema({
    title: {
        type: String
    },
    smartAssumptions: {
        type: Boolean,
        defaultValue: false
    },
    owner: {
        type: String
    },
    seenBlueprint: {
        type: Boolean,
        defaultValue: false
    },
    seenAssumptions: {
        type: Boolean,
        defaultValue: false
    },
    seenRiskiest: {
        type: Boolean,
        defaultValue: false
    },
    seenExperiments: {
        type: Boolean,
        defaultValue: false
    },
    mainFocus: {
        type: String
    },
    mainProposition: {
        type: String,
        optional: true
    },
    generalDescription: {
        type: String,
        optional: true
    },
    generalProblem: {
        type: String,
        optional: true
    },
    generalValue: {
        type: String,
        optional: true
    },
    generalSolution: {
        type: String,
        optional: true
    },
    stakeholders: {
        type: [SimpleSchema.RegEx.Id]
    },
    company: {
        type: SimpleSchema.RegEx.Id,
        optional: true
    },
    assumptions: {
        type: [Object],
        optional: true
    },
    "assumptions.$.stakeholder": {
        type: String
    },
    "assumptions.$.type": {
        type: Number
    },
    hasBlueprint: {
        type: Boolean,
        defaultValue: true
    },
    usersViewOnly: {
        type: [SimpleSchema.RegEx.Id],
        defaultValue: []
    },
    contributors: {
        type: [SimpleSchema.RegEx.Id],
        defaultValue: []
    }
});

Ideas.attachSchema(ideasSchema);

Ideas.attachBehaviour("timestampable");