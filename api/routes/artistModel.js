const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  _id: {
    type: String,
    required: true
  },
  uri: {
    type: String,
    required: true
  },
  genres: {
    type: [String],
    required: false
  }
});

module.exports = mongoose.model('Artist', artistSchema);
