const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  item_id: String,
  brand_id: String,
  brand_name: String,
  brand_logo: String,
  item_type: Number,
  item_name: String,
  upc: Number,
  // ingredient_statement: null,
  serving_qty: Number,
  serving_unit: String,
  metric_qty: Number,
  metric_unit: String,
  calories: Number,
  calories_from_fat: Number,
  total_fat: Number,
  saturated_fat: Number,
  trans_fat: Number,
  cholesterol: Number,
  sodium: Number,
  total_carb: Number,
  dietary_fiber: Number,
  sugars: Number,
  protein: Number,
  potassium: Number,
  vitamin_a: Number,
  vitamin_c: Number,
  calcium_dv: Number,
  iron_dv: Number,
  updated_at: String,
  created_at: String,
  // section_id: null,
  scans_30day: Number,
  thumbnail: String,
  // tag_id: null,
  tag_name: String,
  // parent_tag_id: null,
  // parent_tag_name: null,
  remote_db_id: Number,
  remote_db_key: Number,
  data_source: String,
  // related: []
});

foodSchema.index({ brand_name: 'text', item_name: 'text', pattern: 'text', size: 'text' });

export const Food = mongoose.model('Food', foodSchema);
