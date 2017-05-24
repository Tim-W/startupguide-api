import {Mongo} from "meteor/mongo";
import {SimpleSchema} from "meteor/aldeed:simple-schema";

Assumptions = new Mongo.Collection('assumptions');

Assumptions.allow({
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

AssumptionsSchema = new SimpleSchema({
    body: {
        type: String
    },
    isRisky: {
        type: Boolean
    }
});

Assumptions.attachBehaviour("timestampable");

Assumptions.attachSchema(AssumptionsSchema);