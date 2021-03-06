Experiments = new Mongo.Collection('experiments');

Experiments.allow({
    insert(userId, doc) {
        return true;
    },
    update(userId, doc) {
        return true;
    },
    remove(userId, doc) {
        return true;
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