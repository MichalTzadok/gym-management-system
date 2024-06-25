import mongoose from 'mongoose';
import config from './config';
import { Db } from 'mongodb';

const connectToDB = async () => {
    const { url} = config.database;
    
    try {
        await mongoose.connect(url);        
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.log(`Error connecting to the database: ${(error as Error).message}`);
    }
};


export default connectToDB;
