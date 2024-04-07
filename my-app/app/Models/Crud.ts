import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Crud extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
  @column()
  public email: string;

  @column()
  public username: string;

  @column()
  public password: string;

  @column()
  public age: number;
}
