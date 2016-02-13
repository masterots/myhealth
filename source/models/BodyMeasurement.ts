const mongoose = require('mongoose');

const bodyMeasurementSchema = new mongoose.Schema({
  weight: Number,
  neck: Number,
  chest: Number,
  waist: Number,
  hips: Number,
  updated: Date
});

export const BodyMeasurement = mongoose.model('BodyMeasurement', bodyMeasurementSchema);
