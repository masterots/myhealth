/// <reference path="../typings/tsd.d.ts" />

'use strict';
import 'babel-polyfill';
import express = require('express');
import * as path from 'path';
import { urlencoded, json } from 'body-parser';
import * as mongoose from 'mongoose';

const app = express();
mongoose.connect('mongodb://localhost:27017/myhealth_dev');

import { ExerciseDiaryController } from './controllers';

let FoodController = require('./controllers/FoodController');

app.set('view engine', 'jade');
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '..', 'bower_components')));

const port = process.env.PORT || 8080;

const apiRouter = express.Router();
const pageRouter = express.Router();

async function getFood(req, res) {
  try {
    var data = await FoodController.getAll();
    res.json(data);
  }
  catch (e) {
    console.log(e);
  }
}

apiRouter.get('/', (req, res) => res.json({ message: 'hooray! welcome to our api!' }));

apiRouter.route('/foods')
  .get(getFood);

apiRouter.route('/exerciseDiary')
  .get(ExerciseDiaryController.getAll)
  .post(ExerciseDiaryController.add);

pageRouter.get('/', (req, res) => res.render('react-reports'));
pageRouter.get('/admin', (req, res) => res.render('react-admin'));

app.use('/api', apiRouter);
app.use('/react', pageRouter);

app.listen(port);
console.log(`Magic happens on port ${port}`);

