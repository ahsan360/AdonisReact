import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "comments";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.integer("user_id").unsigned().references("id").inTable("fbusers");
      table.integer("post_id").unsigned().references("id").inTable("fbposts");
      table.string("content");
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at").nullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
