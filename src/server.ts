/// <reference path="../typings/tsd.d.ts" />

'use strict';
import 'babel-polyfill';
import express = require('express');
import { urlencoded, json } from 'body-parser';
import * as mongoose from 'mongoose';
import * as graffiti from '@risingstack/graffiti';
import * as gmongoose from '@risingstack/graffiti-mongoose';
import {Food} from './models/Food';

const app = express();
mongoose.connect('mongodb://localhost:27017/myhealth_dev');

let FoodController = require('./controllers/FoodController');

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(graffiti.express({
  schema: gmongoose.getSchema([Food])
}));

const port = process.env.PORT || 8080;

const router = express.Router();

async function getFood(req, res) {
  try {
    var data = await FoodController.getAll();
    res.json(data);
  }
  catch (e) {
    console.log(e);
  }
}

router.get('/', (req, res) => res.json({ message: 'hooray! welcome to our api!' }));

router.route('/food')
  .get(getFood);

app.use('/api', router);

app.listen(port);
console.log(`Magic happens on port ${port}`);

