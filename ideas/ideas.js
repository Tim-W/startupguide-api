import {Mongo} from "meteor/mongo";
import {SimpleSchema} from "meteor/aldeed:simple-schema";

Ideas = new Mongo.Collection('ideas');

Ideas.allow({
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

const ideasSchema = new SimpleSchema({
    title: {
        type: String
    },
    owner: {
        type: String
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
    }
});

Ideas.attachSchema(ideasSchema);

Ideas.attachBehaviour("timestampable");