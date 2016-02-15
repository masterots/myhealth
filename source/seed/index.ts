'use strict';
import 'babel-polyfill';

import * as mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/myhealth_dev');
import {Food, BodyMeasurement, ExerciseDiary, Recipe, FoodDiary} from '../models';

async function cleanData() {
  try {
    const foodClear = await Food.remove({});
    const bodyMeasurementsClear = await BodyMeasurement.remove({});
    const exerciseDiaryClear = await ExerciseDiary.remove({});
    return;
  } catch (error) {
    throw new Error(error);
  }
}

async function insertFood() {
  try {
    const result = await Food.insertMany(require('../../seed-data/food.json'));
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

async function insertBodyMeasurements() {
  try {
    const result = await BodyMeasurement.insertMany(require('../../seed-data/body-measurements.json'));
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

async function insertExercises() {
  try {
    const result = await ExerciseDiary.insertMany(require('../../seed-data/exercise.json'));
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

async function run() {
  try {
    const dropResult = await cleanData();
    const insertFoodResult = await insertFood();
    const insertBodyMeasurementResult = await insertBodyMeasurements();
    const insertExercisesResult = await insertExercises();
    console.log('done');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

run();