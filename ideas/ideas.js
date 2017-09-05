import {Mongo} from "meteor/mongo";
import {SimpleSchema} from "meteor/aldeed:simple-schema";

Ideas = new Mongo.Collection('ideas');

Ideas.allow({
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
    },
    hasBlueprint: {
        type: Boolean,
        defaultValue: true
    }
});

Ideas.attachSchema(ideasSchema);

Ideas.attachBehaviour("timestampable");