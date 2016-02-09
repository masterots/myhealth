const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-double')(mongoose);

const SchemaTypes = mongoose.Schema.Types;

const nutritionSchema = new Schema({
  ndbNo: SchemaTypes.String,
  shortDesc: SchemaTypes.String,
  water: SchemaTypes.Double,
  energyKcal: SchemaTypes.Number,
  protein: SchemaTypes.Double,
  carbohydrate: SchemaTypes.Double,
  fiberTotalDietary: SchemaTypes.Double,
  sugarTotal: SchemaTypes.Double,
  calcium: SchemaTypes.Double,
  iron: SchemaTypes.Double,
  magnesium: SchemaTypes.Double,
  phosphorus: SchemaTypes.Double,
  potassium: SchemaTypes.Double,
  sodium: SchemaTypes.Double,
  vitK: SchemaTypes.Double,
  saturatedFat: SchemaTypes.Double,
  monounsaturatedFat: SchemaTypes.Double,
  polyunsaturatedFat: SchemaTypes.Double,
  cholesterol: SchemaTypes.Double,
  householdWeight1: SchemaTypes.Double,
  householdWeight1Description: SchemaTypes.String,
  householdWeight2: SchemaTypes.Double,
  householdWeight2Description: SchemaTypes.String,
  // lipidTotal: SchemaTypes.Double,
  // ash: SchemaTypes.Double,
  // zinc: SchemaTypes.Double,
  // copper: SchemaTypes.Double,
  // manganese: SchemaTypes.Double,
  // selenium: SchemaTypes.Double,
  // vitC: SchemaTypes.Double,
  // thiamin: SchemaTypes.Double,
  // riboflavin: SchemaTypes.Double,
  // niacin: SchemaTypes.Double,
  // pantoAcid: SchemaTypes.Double,
  // vitB6: SchemaTypes.Double,
  // folateTot: SchemaTypes.Double,
  // folicAcid: SchemaTypes.Double,
  // foodFolate: SchemaTypes.Double,
  // folateDFE: SchemaTypes.Double,
  // fholineTot: SchemaTypes.Double,
  // vitB12: SchemaTypes.Double,
  // vitAIU: SchemaTypes.Double,
  // vitARAE: SchemaTypes.Double,
  // retinol: SchemaTypes.Double,
  // alphaCarot: SchemaTypes.Double,
  // betaCarot: SchemaTypes.Double,
  // betaCrypt: SchemaTypes.Double,
  // lycopene: SchemaTypes.Double,
  // luteinZeazanthin: SchemaTypes.Double,
  // vitE: SchemaTypes.Double,
  // vitDMcg: SchemaTypes.Double,
  // vitDIU: SchemaTypes.Double,
  // refusePct: SchemaTypes.Double
});

const NutritionData = mongoose.model('NutritionData', nutritionSchema);

export default NutritionData;
