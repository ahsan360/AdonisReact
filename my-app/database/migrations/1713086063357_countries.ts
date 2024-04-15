import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'countries'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('country').unique()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
