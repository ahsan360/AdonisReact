// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Crud from "App/Models/Crud";

export default class CrudsController {
  async index({ request, response }) {
    const crudData = await Crud.all();
    return response.json({ crudData });
  }

  async show({ params, request, response }) {}

  async store({ request, response }) {
    const reqdData = await request.all();
    console.log(reqdData)
    const data = await Crud.create(reqdData);
    data.save();
  }

  async update({ params, request, response }) {
    try {
      const updatedData = await request.all();
      const data = await Crud.find(updatedData.id);
      console.log(updatedData);
      data?.merge(updatedData);
      data?.save();
    } catch (err) {
      console.log(err);
    }
  }
  async destroy({ params, request, response }) {
    const data = await Crud.find(params.id);
    data?.delete();
  }
  async getProject({ params, request, response }) {}
}

module.exports = CrudsController;
