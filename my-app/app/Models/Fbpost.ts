import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  HasMany,
  belongsTo,
  column,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Fbuser from "./Fbuser";
import Comment from "./Comment";
import Like from "./Like";

export default class Fbpost extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
  @column()
  public userId: number;
  @column()
  public content: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Fbuser, {
    localKey: "userId",
  })
  public creator: BelongsTo<typeof Fbuser>;
  @hasMany(() => Comment, {
    foreignKey: "postId",
  })
  public userComments: HasMany<typeof Comment>;
  @hasMany(() => Like, {
    foreignKey: "postId",
  })
  public userLike: HasMany<typeof Like>;
}
