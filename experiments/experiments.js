Experiments = new Mongo.Collection('experiments');

Experiments.allow({
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
    }
});

Experiments.attachSchema(experimentsSchema);

Experiments.attachBehaviour("timestampable");