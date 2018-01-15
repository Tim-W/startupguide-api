import {Mongo} from "meteor/mongo";
import {SimpleSchema} from "meteor/aldeed:simple-schema";

Assumptions = new Mongo.Collection('assumptions');

Assumptions.allow({
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

AssumptionsSchema = new SimpleSchema({
    body: {
        type: String
    },
    isRisky: {
        type: Boolean
    },
    smartProbability: {
        type: Number,
        optional: true
    },
    smartImpact: {
        type: Number,
        optional: true
    },
    experiment: {
        type: SimpleSchema.RegEx.Id,
        optional: true
    }
});

Assumptions.attachBehaviour("timestampable");

Assumptions.attachSchema(AssumptionsSchema);