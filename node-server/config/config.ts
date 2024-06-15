const config = {
  database: {
      url: process.env.MONGODB_URI || 'mongodb://localhost/gym-management',
  },
  server: {
      port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
  },
  jwtSecret: process.env.JWT_SECRET || 'supersecretkey',
  apiKey: process.env.API_KEY ||  ''
};

export default config;