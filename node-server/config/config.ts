import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.MONGODB_URI);

const config = {
  
  database: {
      url: process.env.MONGODB_URI || 'mongodb://localhost/gym-management-system',
  },
  server: {
      port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
  },
  auth: {
    domain: process.env.AUTH0_DOMAIN || 'your-auth0-domain',
    clientID: process.env.AUTH0_CLIENT_ID || 'your-auth0-client-id',
    clientSecret: process.env.AUTH0_CLIENT_SECRET || 'your-auth0-client-secret',
    callbackURL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
  },
  jwtSecret: process.env.JWT_SECRET || 'supersecretkey',
  apiKey: process.env.API_KEY ||  ''
};

export default config;





