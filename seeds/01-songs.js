
exports.seed = function(knex, Promise) {
  var seedSongs = [
    knex('song').insert({
      name: 'Ripple',
      times_played: 159,
      rating: 10
    }),
    knex('song').insert({
      name: 'Jack Straw',
      times_played: 257,
      rating: 6
    }),
    knex('song').insert({
      name: 'China Cat Sunflower',
      times_played: 329,
      rating: 7
    }),
    knex('song').insert({
      name: 'Bertha',
      times_played: 231,
      rating: 8
    })
  ];
  return knex('song').del().then(function () {
      return Promise.all(seedSongs);
    });
};
