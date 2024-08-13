import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import keyAuthRoutes from './routes/KeyAuth';

dotenv.config();

const app = express();
app.use(cors()).use(express.json()).use('/api', keyAuthRoutes);

mongoose.connect(process.env.MONGO_URL!)
  .then(() => {
    app.listen(process.env.PORT,()=>{
      console.log('Server running and MongoDB connected');
    });
  })
  .catch(err=>console.error(err.message));
