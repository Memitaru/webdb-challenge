
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
      tbl.increments();
      tbl.string('description', 1000);
      tbl.string('notes', 1000);
      tbl.boolean('completed');
      tbl.integer('project_id').notNullable().references('id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE').unsigned();
      tbl.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
};
