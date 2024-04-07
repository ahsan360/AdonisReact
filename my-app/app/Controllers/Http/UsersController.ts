// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database";
import User from "App/Models/User";

export default class UsersController {
  async index({ request, response }) {
    const users = User.query().where("age", ">", 18).orderBy();
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
