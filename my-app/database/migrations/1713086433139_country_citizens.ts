import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'country_citizens'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer("country_id").unsigned().references("id").inTable("countries");
      table.integer("citizen_id").unsigned().references("id").inTable("citizens");
      table.string("role");
      table.unique(['country_id','citizen_id'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
