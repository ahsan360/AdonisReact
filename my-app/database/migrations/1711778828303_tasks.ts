import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "tasks";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.text("description").notNullable();
      table.timestamp("due_at").notNullable();
      table.integer("status_id").unsigned().notNullable().defaultTo(1);
      table.integer("created_by").unsigned().references("id").inTable("users");
      table.integer("assigned_to").unsigned().references("id").inTable("users");
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
