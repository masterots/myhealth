/// <reference path="../typings/tsd.d.ts" />

'use strict';
import 'babel-polyfill';
import express = require('express');
import { urlencoded, json } from 'body-parser';
import * as mongoose from 'mongoose';
import graffiti from '@risingstack/graffiti';
import { getSchema } from '@risingstack/graffiti-mongoose';
import NutritionData from './models/NutritionData';

const app = express();
mongoose.connect('mongodb://localhost:27017/myhealth_dev');

let NutritionDataController = require('./controllers/NutritionDataController');

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(graffiti.express({
  schema: getSchema([NutritionData])
}));

const port = process.env.PORT || 8080;

const router = express.Router();

async function getNutritionData(req, res) {
  try {
    var data = await NutritionDataController.getAll('some dude');
    res.json(data);
  }
  catch (e) {
    console.log(e);
  }
}

router.get('/', (req, res) => res.json({ message: 'hooray! welcome to our api!' }));

router.route('/nutrition-data')
  .get(getNutritionData);

app.use('/api', router);

app.listen(port);
console.log(`Magic happens on port ${port}`);

