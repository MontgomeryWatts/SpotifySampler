import express from 'express';
import mongoose from 'mongoose';
import artistsRouter from './routes/artist';

const app = express();
const uri = process.env.MONGODB_URI;

if (uri === undefined) {
  process.exit(1);
}

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.disable('x-powered-by');

app.use('/artists', artistsRouter);

module.exports = {
  path: '/api/',
  handler: app
};
