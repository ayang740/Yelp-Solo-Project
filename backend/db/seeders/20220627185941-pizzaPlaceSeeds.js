'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('PizzaPlaces', [{
        name: 'Paulie Gee\'s Slice Shop',
        openingTime: '11:30 AM',
        closingTime: '10:00 PM',
        address: '110 Franklin St, Brooklyn, NY 11222',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Best Pizza',
        openingTime: '11:00 AM',
        closingTime: '10:00 PM',
        address: '33 Havemeyer St, Brooklyn, NY 11211',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'L&B Spumoni Gardens',
        openingTime: '11:00 AM',
        closingTime: '11:30 PM',
        address: '2725 86th St, Brooklyn, NY 11223',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Prince Street Pizza',
        openingTime: '10:00 AM',
        closingTime: '3:00 AM',
        address: '27 Prince St A, New York, NY 10012',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Scarr\'s Pizza',
        openingTime: '12:00 PM',
        closingTime: '11:00 PM',
        address: '22 Orchard St, New York, NY 10002',
        userId: 1,
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
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('PizzaPlaces', null, {});
  }
};
