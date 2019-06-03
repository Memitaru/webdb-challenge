
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments();
    tbl.string('name', 128).unique().notNullable();
    tbl.string('description', 1000);
    tbl.boolean('completed').notNullable();
    tbl.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
