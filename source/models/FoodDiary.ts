const mongoose = require('mongoose');

const foodDiarySchema = new mongoose.Schema({
  meal: String,
  diaryDate: Date,
  createDate: Date,
  food: { type: mongoose.SchemaTypes.ObjectId, ref: 'Food' },
  servings: Number
});

export const FoodDiary = mongoose.model('FoodDiary', foodDiarySchema);
