import { Schema, model, Document, Types } from 'mongoose';

interface IService extends Document {
    name: string;
    description: string;
    price: number;
    duration: string;
    businessId: Types.ObjectId;
}

const serviceSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    businessId: { type: Schema.Types.ObjectId, required: true, ref: 'Business'},
});

const ServiceModel = model<IService>('Service', serviceSchema);

export { ServiceModel, IService };
