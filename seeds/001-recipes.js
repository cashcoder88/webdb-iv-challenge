
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {dish_id: 1, name: 'Bbq Chicken Pizza', instructions: 'Put bbq sauce and chicken on pizza dough'},
        {dish_id: 2, name: 'Al Pastor', instructions: 'put al pastor taco meat on tortilla'},
        {dish_id: 3, name: 'Ham and Cheese', instructions: "put ham and cheese on bread"}
      ]);
    });
};
