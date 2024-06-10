import { Schema, model } from 'mongoose';

const businessSchema = new Schema({
    name: String,
    description: String,
    address: String,
    phone: String,
    user: {
        type: String,
        ref: 'user',
    },
});

const BusinessModel = model('Business', businessSchema);

module.exports = BusinessModel;