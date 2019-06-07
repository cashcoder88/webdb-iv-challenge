
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl) {
      tbl.increments();
      tbl.string('name').notNullable().unique();
      tbl.string('instructions').unique();

      tbl.integer('dish_id')
      .unsigned()
      .references('id')
      .inTable('dishes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
};
