
exports.up = function(knex, Promise) {
  return knex.schema.createTable("song", function(table){
    table.increments();
    table.string("name");
    table.integer("times_played");
    table.integer("rating");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("song");
};
