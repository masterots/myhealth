const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  itemId: String,
  brandId: String,
  brandName: String,
  brandLogo: String,
  itemType: Number,
  itemName: String,
  upc: Number,
  // ingredientStatement: null,
  servingQty: Number,
  servingUnit: String,
  metricQty: Number,
  metricUnit: String,
  calories: Number,
  caloriesFromFat: Number,
  totalFat: Number,
  saturatedFat: Number,
  transFat: Number,
  cholesterol: Number,
  sodium: Number,
  totalCarb: Number,
  dietaryFiber: Number,
  sugars: Number,
  protein: Number,
  potassium: Number,
  vitaminA: Number,
  vitaminC: Number,
  calciumDv: Number,
  ironDv: Number,
  updatedAt: String,
  createdAt: String,
  // sectionId: null,
  scans30day: Number,
  thumbnail: String,
  // tagId: null,
  tagName: String,
  // parentTagId: null,
  // parentTagName: null,
  remoteDbId: Number,
  remoteDbKey: Number,
  dataSource: String,
  // related: []
});

foodSchema.index({ brandName: 'text', itemName: 'text', pattern: 'text', size: 'text' });

export const Food = mongoose.model('Food', foodSchema);
