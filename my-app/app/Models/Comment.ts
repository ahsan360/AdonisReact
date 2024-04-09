import { DateTime } from "luxon";
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from "@ioc:Adonis/Lucid/Orm";
import User from "./User";
import Fbuser from "./Fbuser";
import Fbpost from "./Fbpost";

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
  @column()
  public userId: number;
  @column()
  public postId: number;
  @column()
  public content: string;
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;
  @belongsTo(() => Fbpost, {
    localKey: "postId",
  })
  public userPost: BelongsTo<typeof Fbpost>;
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
