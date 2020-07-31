import { Schema } from 'mongoose';

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

export default Image;
