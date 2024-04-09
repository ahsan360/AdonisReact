import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  HasMany,
  belongsTo,
  column,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Fbpost from "./Fbpost";
import Comment from "./Comment";

export default class Fbuser extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
  @column()
  public username: string;
  @column()
  public email: string;
  @hasMany(() => Fbpost, {
    foreignKey: "userId",
  })
  public userPost: HasMany<typeof Fbpost>;
}
