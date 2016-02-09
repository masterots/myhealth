const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaTypes = mongoose.Schema.Types;

const nutritionSchema = new Schema({
  ndbNo: SchemaTypes.String,
  shortDesc: SchemaTypes.String,
  water: SchemaTypes.Number,
  energyKcal: SchemaTypes.Number,
  protein: SchemaTypes.Number,
  carbohydrate: SchemaTypes.Number,
  fiberTotalDietary: SchemaTypes.Number,
  sugarTotal: SchemaTypes.Number,
  calcium: SchemaTypes.Number,
  iron: SchemaTypes.Number,
  magnesium: SchemaTypes.Number,
  phosphorus: SchemaTypes.Number,
  potassium: SchemaTypes.Number,
  sodium: SchemaTypes.Number,
  vitK: SchemaTypes.Number,
  saturatedFat: SchemaTypes.Number,
  monounsaturatedFat: SchemaTypes.Number,
  polyunsaturatedFat: SchemaTypes.Number,
  cholesterol: SchemaTypes.Number,
  householdWeight1: SchemaTypes.Number,
  householdWeight1Description: SchemaTypes.String,
  householdWeight2: SchemaTypes.Number,
  householdWeight2Description: SchemaTypes.String,
  // lipidTotal: SchemaTypes.Number,
  // ash: SchemaTypes.Number,
  // zinc: SchemaTypes.Number,
  // copper: SchemaTypes.Number,
  // manganese: SchemaTypes.Number,
  // selenium: SchemaTypes.Number,
  // vitC: SchemaTypes.Number,
  // thiamin: SchemaTypes.Number,
  // riboflavin: SchemaTypes.Number,
  // niacin: SchemaTypes.Number,
  // pantoAcid: SchemaTypes.Number,
  // vitB6: SchemaTypes.Number,
  // folateTot: SchemaTypes.Number,
  // folicAcid: SchemaTypes.Number,
  // foodFolate: SchemaTypes.Number,
  // folateDFE: SchemaTypes.Number,
  // fholineTot: SchemaTypes.Number,
  // vitB12: SchemaTypes.Number,
  // vitAIU: SchemaTypes.Number,
  // vitARAE: SchemaTypes.Number,
  // retinol: SchemaTypes.Number,
  // alphaCarot: SchemaTypes.Number,
  // betaCarot: SchemaTypes.Number,
  // betaCrypt: SchemaTypes.Number,
  // lycopene: SchemaTypes.Number,
  // luteinZeazanthin: SchemaTypes.Number,
  // vitE: SchemaTypes.Number,
  // vitDMcg: SchemaTypes.Number,
  // vitDIU: SchemaTypes.Number,
  // refusePct: SchemaTypes.Number
});

const NutritionData = mongoose.model('NutritionData', nutritionSchema);

export default NutritionData;
