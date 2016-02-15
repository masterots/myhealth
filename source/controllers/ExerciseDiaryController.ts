'use strict';

import { ExerciseDiary } from '../models/';

export class ExerciseDiaryController {
  public static async getAll(req, res) {
    try {
      const data = await ExerciseDiary.find({});
      return res.send(data);
    }
    catch (error) {
      res.status(500).error(error);
    }
  }

  public static async add(req, res) {
    try {
      const entry = await ExerciseDiary.create(req.body);
      return res.send(entry);
    }
    catch (error) {
      res.status(500).error(error);
    }
  }
}