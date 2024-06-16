import mongoose, { Schema, model, Document, Model } from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
}

const UserSchema:Schema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user', required: true},
});

const UserModel = model<IUser>('User', UserSchema);
export { UserModel, IUser };
