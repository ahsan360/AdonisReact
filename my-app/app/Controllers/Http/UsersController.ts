// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database";
import Citizen from "App/Models/Citizen";
import Comment from "App/Models/Comment";
import Country from "App/Models/Country";
import Fbpost from "App/Models/Fbpost";
import Fbuser from "App/Models/Fbuser";
import Post from "App/Models/Post";
import Task from "App/Models/Task";
import User from "App/Models/User";

export default class UsersController {
  async index({ request, response }) {
    const key = 'today'
    const users = await Fbpost.query().where('content', 'LIKE', `%${key}%`)
    return response.json({ users }); 
  }

  async show({ params, request, response }) {}

  async store({ request, response }) {
    const data = request.all();
    const user = await User.create(data);
    return response.json({ data });
  }
  async update({  params,  request,  response }) {}
  async destroy({ params,  request,  response }) {}
}
