import { DateTime } from "luxon";
import {
  BaseModel,
  column,
  belongsTo,
  BelongsTo,
  manyToMany,
  ManyToMany,
} from "@ioc:Adonis/Lucid/Orm";
import User from "./User";
import Project from "./Project";

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public description: string;

  @column.dateTime()
  public dueAt: DateTime;

  @column()
  public statusId: number;

  @column()
  public createdBy: number;

  @column()
  public assignedTo: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => User, {
    localKey: "createdBy",
  })
  public creator: BelongsTo<typeof User>;

  @belongsTo(() => User, {
    localKey: "assignedTo",
  })
  public assignee: BelongsTo<typeof User>;

  @manyToMany(() => Project, {
    pivotColumns: ['sort_order'],
  })
  public projects : ManyToMany<typeof Project>;
}
