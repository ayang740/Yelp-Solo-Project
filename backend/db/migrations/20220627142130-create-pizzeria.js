'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pizzerias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      openingTime: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      closingTime: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pizzerias');
  }
};