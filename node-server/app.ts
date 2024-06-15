import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import config from './config/config';
import userRoutes from './routers/user.router';
import swaggerMiddleware from './middleware/swagger.middleware'; 

const app = express();
const port = config.server.port;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
swaggerMiddleware(app);
app.use('/users', userRoutes);
app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});