import mongoose, { Schema } from 'mongoose';
import Image from './imageSchema';

const Artist: Schema = new Schema({
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
  },
  images: {
    type: [Image],
    required: false
  }
});

export default mongoose.model('Artist', Artist);
