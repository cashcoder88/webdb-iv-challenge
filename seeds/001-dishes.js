exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'Chicken Parm'},
        {name: 'Philly Cheese Steak'},
        {name: 'Falafel Gyro'},
        {name: 'Margherita Pizza'}
      ]);
    });
};