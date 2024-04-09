import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'fbposts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer("user_id").unsigned().references("id").inTable("fbusers");
      table.string('content'); 
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
