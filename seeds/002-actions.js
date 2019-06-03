
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          description: "test action",
          notes: "test notes",
          completed: false,
          project_id: 3
        },
        {
          description: "test action 2",
          notes: "test notes",
          completed: false,
          project_id: 3
        },
        {
          description: "test action 3",
          notes: "test notes",
          completed: false,
          project_id: 1
        }
      ]);
    });
};
