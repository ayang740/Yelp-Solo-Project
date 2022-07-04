'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    item: DataTypes.STRING,
    price: DataTypes.INTEGER,
    pizzaPlaceId: DataTypes.INTEGER
  }, {});
  Menu.associate = function(models) {
    // associations can be defined here
    Menu.belongsTo(models.PizzaPlace, { foreignKey: "pizzaPlaceId" });
  };
  return Menu;
};