
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resolutions').del()
    .then(function () {
      // Inserts seed entries
      return knex('resolutions').insert([
        {id: 1,
          resolution: 'Be more optimistic',
          user_id: 1
        },
      ]);
    });
};
