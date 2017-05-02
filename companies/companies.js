import {Mongo} from "meteor/mongo";
import {SimpleSchema} from "meteor/aldeed:simple-schema";

Companies = new Mongo.Collection('companies');

Companies.allow({
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

const companiesSchema = new SimpleSchema({
    title: {
        type: String
    },
    members: {
        type: [SimpleSchema.RegEx.Id],
        optional: true
    }
});

Companies.attachSchema(companiesSchema);

Companies.attachBehaviour("timestampable");