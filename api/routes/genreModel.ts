import mongoose, { Schema } from 'mongoose';
const Genre: Schema = new Schema({
  _id: {
    type: String,
    required: true
  },
  numArtists: {
    type: Number,
    required: true
  }
});

export default mongoose.model('Genre', Genre);
