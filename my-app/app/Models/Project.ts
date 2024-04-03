import { DateTime } from "luxon";
import { BaseModel, ManyToMany, column, manyToMany } from "@ioc:Adonis/Lucid/Orm";
import User from "./User";
import Task from "./Task";

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public description: string | null;

  @column()
  public statusId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
  @manyToMany(() => User, {
    pivotColumns:['role_id']
  })
  public users: ManyToMany<typeof User>
  
  @manyToMany(() => Task, {
    pivotColumns : ['sort_order']
    
  })
  public tasks : ManyToMany<typeof Task>
}
