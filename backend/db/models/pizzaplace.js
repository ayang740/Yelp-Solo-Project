'use strict';
module.exports = (sequelize, DataTypes) => {
  const PizzaPlace = sequelize.define('PizzaPlace', {
    name: DataTypes.STRING,
    openingTime: DataTypes.STRING,
    closingTime: DataTypes.STRING,
    address: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  PizzaPlace.associate = function(models) {
    PizzaPlace.hasMany(models.Review, { foreignKey: "pizzaPlaceId" });
    PizzaPlace.belongsTo(models.User, { foreignKey: "userId" });
  };
  return PizzaPlace;
};