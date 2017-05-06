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
    }
});

Companies.attachSchema(companiesSchema);