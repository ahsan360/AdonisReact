import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema ,rules} from "@ioc:Adonis/Core/Validator";

export default class ValidationsController {
  async store({ request, response }: HttpContextContract) {
    const newUserSchema = schema.create({
      name: schema.string(),
      email: schema.string({}, [rules.email()]), // Specify an empty object as options
      age: schema.number(),
    });

    try {
      const payload = await request.validate({
        schema: newUserSchema,
      });

      return response.json({ message: "Validation successful" });
    } catch (error) {
      return response.json(error.messages);
    }
  }
}
