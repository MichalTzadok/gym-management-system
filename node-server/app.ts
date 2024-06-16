import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import config from './config/config';
import userRoutes from './routers/user.router';
import swaggerMiddleware from './middleware/swagger.middleware'; 
import serviceRoutes from './routers/service.router';
import businessRoutes from './routers/business.router';
import meetingRoutes from './routers/meeting.router';
import authRoutes from './routers/auth.router'

const app = express();
const port = config.server.port;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
swaggerMiddleware(app);
app.use('/', authRoutes);
app.use('/users', userRoutes);
app.use('/services', serviceRoutes);
app.use('/business', businessRoutes);
app.use('/meetings', meetingRoutes);

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});