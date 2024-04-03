import { DateTime } from "luxon";
import { BaseModel, column, belongsTo, BelongsTo } from "@ioc:Adonis/Lucid/Orm";
import Project from "./Project";
import User from "./User";

export default class ProjectTask extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public roleId: number;

  @column()
  public projectId: number;

  @column()
  public userId: number;

  @column()
  public shortOrder: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Project)
  public project: BelongsTo<typeof Project>;

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;
  
}
