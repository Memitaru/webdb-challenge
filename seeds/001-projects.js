
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: "test",
          description: "this is a description",
          completed: false
        },
        {
          name: "test 2",
          description: "this is a description 2",
          completed: true
        },
        {
          name: "test 3",
          description: "this is a description 3",
          completed: false
        }
      ]);
    });
};
