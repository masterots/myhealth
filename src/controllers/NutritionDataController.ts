'use strict';
import NutritionData from '../models/NutritionData';

function log(level: string) {
  return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
    let originalValue = descriptor.value;
    const re = /function\s([a-z]+)/i;

    descriptor.value = function(...args: any[]) {
      const objectName = re.exec(target.toString())[1];
      const result = originalValue.apply(this, args);
      if (level === 'debug' && process.env.NODE_ENV !== 'production') {
        console.log(objectName, propertyKey, JSON.stringify(args), `=> ${result}`);
      }
      return result;
    }

    return descriptor;
  }
}

class NutritionDataController {
  constructor() {}

  @log('debug')
  public static async getAll(crapinsky: string) {
    try {
      const data = await NutritionData.find();
      return data;
    }
    catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }
}

module.exports = NutritionDataController;