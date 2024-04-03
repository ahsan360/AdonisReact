"use strict";

import Project from "App/Models/Project";
import User from "App/Models/User";
class ProjectController {
  async index({ request, response }) {}

  async show({ params, request, response }) {}

  async store({ request, response }) {
    const name = request.all();
    const project = await Project.create(name);
    const user1 = await User.findOrFail(1);
    const user2 = await User.findOrFail(2);
    console.log(user1,user2)
    await project.related("users").attach({
      [user1.id]: {
        role_id: 1,
      },
      [user2.id]: {
        role_id: 2,
      },
    });
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
