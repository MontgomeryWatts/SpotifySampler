import mongoose, { Schema } from 'mongoose';

const Image: Schema = new Schema({
  height: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  width: {
    type: Number,
    required: true
  }
});

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
