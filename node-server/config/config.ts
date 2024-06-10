import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/gym-management',
  jwtSecret: process.env.JWT_SECRET || 'supersecretkey',
};
