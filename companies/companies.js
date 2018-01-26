import {Mongo} from "meteor/mongo";
import {SimpleSchema} from "meteor/aldeed:simple-schema";

Companies = new Mongo.Collection('companies');

Companies.allow({
    insert() {
        return true;
    },
    update(userId, doc) {
        return doc.createdBy === userId;
    },
    remove(userId, doc) {
        return doc.createdBy === userId;
    }
});

const companiesSchema = new SimpleSchema({
    title: {
        type: String
    },
    hasDefaultIdea: {
        type: Boolean,
        defaultValue: false
    }
});

Companies.attachSchema(companiesSchema);

export default Companies;