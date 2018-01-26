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

Assumptions.helpers({
    smartScore() {
        return  (this.smartProbability || 0) * (this.smartImpact || 0);
    }
});

Assumptions.attachBehaviour("timestampable");

Assumptions.attachSchema(AssumptionsSchema);

export default AssumptionsSchema;