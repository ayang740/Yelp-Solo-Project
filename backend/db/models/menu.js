'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    item: DataTypes.STRING,
    price: DataTypes.INTEGER,
    pizzeriaId: DataTypes.INTEGER
  }, {});
  Menu.associate = function(models) {
    // associations can be defined here
  };
  return Menu;
};