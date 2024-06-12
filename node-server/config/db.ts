import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { config } from './config';

dotenv.config();
const connectToDB = async () => {
    try {
        await mongoose.connect(config.mongoURI);
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.log(`Error connecting to the database: ${(error as Error).message}`);
    }
};


export default connectToDB;
