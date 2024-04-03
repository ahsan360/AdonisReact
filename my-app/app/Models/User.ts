import { DateTime } from "luxon";
import {
  BaseModel,
  HasMany,
  ManyToMany,
  column,
  hasMany,
  manyToMany,
} from "@ioc:Adonis/Lucid/Orm";
import Task from "./Task";
import Project from "./Project";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public email: string;

  @column()
  public username: string;

  @column()
  public password: string;

  @column()
  public rememberMeToken?: string | null;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
  @hasMany(() => Task, {
    foreignKey: "createdBy",
  })
  public tasks: HasMany<typeof Task>;

  @hasMany(() => Task, {
    foreignKey: "assignedTo",
  })
  public assignedTasks: HasMany<typeof Task>;
  @manyToMany(() => Project, {
    pivotColumns:['role_id']
  })
  public projects: ManyToMany<typeof Project>;
}
