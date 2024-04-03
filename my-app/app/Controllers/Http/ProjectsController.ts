"use strict";

import Project from "App/Models/Project";
class ProjectController {
  async index({ request, response }) {}

  async show({ params, request, response }) {}

  async store({ request, response }) {
    const name = request.all();
    const project = await Project.create(name);
    return response.json({ project });
  }

  async update({ params, request, response }) {
    const project = await Project.findOrFail(params.id);
    project.name = "updated name";
    await project.save();
    return response.json({ project });
  }
  async destroy({ params, request, response }) {
    const project = await Project.findOrFail(params.id);
    await project.delete();
  }
  async getProject({ params, request, response }) {
    const users = await Project.query().from("projects").select("*");
    return response.json(users);
  }
}

module.exports = ProjectController;
