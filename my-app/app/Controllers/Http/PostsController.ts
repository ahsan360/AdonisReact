 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContext } from "@adonisjs/core/build/standalone";
import User from "App/Models/User";
import Project from 'App/Models/Project';
export default class PostsController {
  index({ view }) {
    return view.render("index", {
      title: "Latest Post",
      desscription: " hay i am post no 1 from lastest post",
    });
  }
  async post({ response }) {
    const users = await User.all();
    console.log("Users:");
    return response.json(users);
  }
  async create({ request, response }:HttpContextContract) {
    const name = request.input('name');
    const project = await Project.create({name});
    return  response.json({project});
  }
}
