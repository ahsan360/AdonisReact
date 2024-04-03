import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "project_tasks";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.integer("short_order").unsigned().notNullable().defaultTo(1);
      table
        .integer("project_id")
        .unsigned().notNullable()
        .references("id")
        .inTable("projects");
      table.integer("task_id").notNullable().unsigned().references("id").inTable("tasks");
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
