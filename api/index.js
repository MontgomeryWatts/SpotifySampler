const express = require('express');
const mongoose = require('mongoose');
const artistsRouter = require('./routes/artist');
const app = express();

mongoose.connect('mongodb://localhost/local', { useNewUrlParser: true });

app.use('/artists', artistsRouter);
module.exports = {
  path: '/api/',
  handler: app
};
