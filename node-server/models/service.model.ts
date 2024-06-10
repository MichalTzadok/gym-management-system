import { Schema, model } from 'mongoose';

const serviceSchema = new Schema({
    description: String,
    price: Number,
    business: {
        type: String,
        ref: 'business',
    },
});

const ServiceModel = model('Service', serviceSchema);

module.exports = ServiceModel;