import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import config from './config/config';
import userRoutes from './routers/user.router';
import swaggerMiddleware from './middleware/swagger.middleware';
import serviceRoutes from './routers/service.router';
import businessRoutes from './routers/business.router';
import meetingRoutes from './routers/meeting.router';
import authRoutes from './routers/auth.router';
// import passport from 'passport';
// import Auth0Strategy from 'passport-auth0';
// import session from 'express-session';

connectDB();

const app = express();
const port = config.server.port;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

swaggerMiddleware(app);

// Uncomment the following lines once you have defined Auth0 strategy and session middleware
// app.use(session({
//   secret: 'your-secret-session-key',
//   resave: false,
//   saveUninitialized: true
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// Define Auth0 strategy
// const strategy = new Auth0Strategy({
//   domain: config.auth.domain,
//   clientID: config.auth.clientID,
//   clientSecret: config.auth.clientSecret,
//   callbackURL: config.auth.callbackURL
// }, function(accessToken, refreshToken, extraParams, profile, done) {
//   // Additional actions as needed
//   return done(null, profile);
// });

// passport.use(strategy);

// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(user, done) {
//   done(null, user);
// });

app.use('/', authRoutes);
app.use('/users', userRoutes);
app.use('/services', serviceRoutes);
app.use('/businesses', businessRoutes);
app.use('/meetings', meetingRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
