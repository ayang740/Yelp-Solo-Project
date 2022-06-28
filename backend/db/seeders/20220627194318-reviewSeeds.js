'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Reviews', [{
        review: 'Hellboy slice was incredible! It had a crispy crust and delicious pepperonis. The drizzle of hot honey on top sealed the deal as the best slice I\'ve ever had.',
        rating: 5,
        userId: 1,
        pizzaPlaceId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        review: 'A solid slice of cheese pizza. Although it was good I cant\'t say they live up to their name of best pizza.',
        rating: 4,
        userId: 2,
        pizzaPlaceId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        review: 'The best crust to sauce to cheese ratio I\'ve ever had.',
        rating: 5,
        userId: 3,
        pizzaPlaceId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
