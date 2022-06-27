'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pizzeria = sequelize.define('Pizzeria', {
    name: DataTypes.STRING,
    openingTime: DataTypes.INTEGER,
    closingTime: DataTypes.INTEGER,
    address: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  Pizzeria.associate = function(models) {
    // associations can be defined here
  };
  return Pizzeria;
};