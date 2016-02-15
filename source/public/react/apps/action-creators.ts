import { ADD_FOOD } from './action-types';

interface IAddFoodAction {
  type: string;
  food: Food;
}

module ActionCreators {
  export function addFood(food: Food): IAddFoodAction {
    return { type: ADD_FOOD, food };
  }
}