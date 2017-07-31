Experiments = new Mongo.Collection('experiments');

Experiments.allow({
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

const experimentsSchema = new SimpleSchema({
    title: {
        type: String
    },
    hypothesis: {
        type: String
    },
    description: {
        type: String
    },
    measure: {
        type: String
    },
    learn: {
        type: String
    },
    isActive: {
        type: Boolean,
        defaultValue: true
    },
    learnings: {
        type: [String],
        optional: true
    },
    isValidated: {
        type: Boolean,
        defaultValue: false
    }
});

Experiments.attachSchema(experimentsSchema);

Experiments.attachBehaviour("timestampable");