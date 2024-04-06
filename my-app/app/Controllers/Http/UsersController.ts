// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database";
import User from "App/Models/User";

export default class UsersController {
  async index({ request, response }) {
    await Database.insertQuery()
      .table("users")
      .insert({ username: "virk", email: "virk@adonisjs.com" });
  }

  async show({ params, request, response }) {}

  async store({ request, response }) {
    const data = request.all();
    const user = await User.create(data);
    return response.json({ data });
  }

  async update({ params, request, response }) {}
  async destroy({ params, request, response }) {}
  async getProject({ params, request, response }) {}
}
