import { DateTime } from "luxon";
import {
  BaseModel,
  ManyToMany,
  column,
  manyToMany,
} from "@ioc:Adonis/Lucid/Orm";
import Citizen from "./Citizen";

export default class Country extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
  @column()
  public country: string;
  @manyToMany(() => Citizen, {
    pivotTable: "country_citizens",
    pivotColumns: ["role"],
  })
  public ccitizen: ManyToMany<typeof Citizen>;
}
