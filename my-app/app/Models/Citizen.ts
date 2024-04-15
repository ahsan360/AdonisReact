import { DateTime } from "luxon";
import {
  BaseModel,
  ManyToMany,
  column,
  manyToMany,
} from "@ioc:Adonis/Lucid/Orm";
import Country from "./Country";

export default class Citizen extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;
  @manyToMany(() => Country, {
    pivotTable: "country_citizens",
    pivotColumns: ["role"],
  })
  public which: ManyToMany<typeof Country>;
}
