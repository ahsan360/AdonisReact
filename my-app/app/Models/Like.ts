import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Fbpost from './Fbpost';

export default class Like extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
  @column()
  public userId: number;
  @column()
  public postId: number;
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;
  @belongsTo(()=>Fbpost,{
    localKey : 'postId'
  })
  public userLike : BelongsTo<typeof Fbpost>
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
