'use strict';
import { Food } from '../models/Food';
// import * as seedItems from '../../seed-data/food';

// function log(level: string) {
//   return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
//     let originalValue = descriptor.value;
//     const re = /function\s([a-z]+)/i;

//     descriptor.value = function(...args: any[]) {
//       const objectName = re.exec(target.toString())[1];
//       const result = originalValue.apply(this, args);
//       if (level === 'debug' && process.env.NODE_ENV !== 'production') {
//         console.log(objectName, propertyKey, JSON.stringify(args), `=> ${result}`);
//       }
//       return result;
//     }

//     return descriptor;
//   }
// }

class FoodController {
  constructor() {}

  // @log('debug')
  public static async getAll() {
    try {
      const data = await Food.find({});
      return data;
    }
    catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }

  // public static async seedDb() {
  //   try {
  //     const result = await Food.insertMany(seedItems);
  //     return result;
  //   }
  //   catch (e) {
  //     console.log(e);
  //     throw new Error(e);
  //   }
  // }
}

module.exports = FoodController;