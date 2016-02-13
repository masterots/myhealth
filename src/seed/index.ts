'use strict';
import 'babel-polyfill';

import * as mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/myhealth_dev');
import {Food} from '../models/Food';

async function cleanFood() {
  try {
    const result = await Food.remove({});
    return result;
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

async function run() {
  try {
    const dropResult = await cleanFood();
    const insertResult = await insertFood();
    console.log('done');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

run();