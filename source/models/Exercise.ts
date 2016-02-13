const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  type: String,
  distance: Number,
  weight: Number,
  name: String,
  elapsedTime: String,
  createdDate: Date
});

export const Exercise = mongoose.model('Exercise', exerciseSchema);
