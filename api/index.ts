import express from 'express';
import mongoose from 'mongoose';
import artistsRouter from './routes/artists';
import genresRouter from './routes/genres';

const app = express();
const uri = process.env.MONGODB_URI;

if (uri === undefined) {
  console.error('MONGODB_URI is not set in environment variables');
  process.exit(1);
}

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.disable('x-powered-by');

app.use('/artists', artistsRouter);
app.use('/genres', genresRouter);

module.exports = {
  path: '/api/',
  handler: app
};
