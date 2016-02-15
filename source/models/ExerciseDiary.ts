const mongoose = require('mongoose');

const exerciseDiarySchema = new mongoose.Schema({
  type: { type: String, enum: ['cardio','strength'] },
  cardio: {
    distance: Number,
    measure: { type: String, enum: ['mi', 'km'] },
    elapsedTime: String,
  },
  sets: [
    {
      order: Number,
      reps: Number,
      weight: Number,
      measure: { type: String, enum: ['lb','kg'] }
    }
  ],
  name: String,
  logDate: Date,
  createdDate: Date
});

export const ExerciseDiary = mongoose.model('ExerciseDiary', exerciseDiarySchema);
