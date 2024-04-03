"use strict";

import Project from "App/Models/Project";

class DataController {
  async index({ response }) {
      const data = await Project.all();
    return response.json(data);
  }
}
module.exports = DataController;
