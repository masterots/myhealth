const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  instructions: String,
  ingredients: [
    {
      food: { type: mongoose.SchemaTypes.ObjectId, ref: 'Food' },
      amount: Number,
      measure: String
    }
  ],
  servings: Number,
  caloriesPerServing: Number,
  fiberPerServing: Number,
  fatPerServing: Number,
  carbsPerServing: Number,
  proteinPerServing: Number
});

export const Recipe = mongoose.model('Recipe', recipeSchema);
