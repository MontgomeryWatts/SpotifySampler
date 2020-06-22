import mongoose from 'mongoose';

const artistSchema: mongoose.Schema = new mongoose.Schema({
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

export default mongoose.model('Artist', artistSchema);
