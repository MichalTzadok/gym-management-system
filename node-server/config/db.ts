import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.log(`Error connecting to the database: ${(error as Error).message}`);
    }
};


export default connectToDB;
