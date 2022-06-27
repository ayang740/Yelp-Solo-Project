'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pizzeria = sequelize.define('Pizzeria', {
    name: DataTypes.STRING,
    openingTime: DataTypes.STRING,
    closingTime: DataTypes.STRING,
    address: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  Pizzeria.associate = function(models) {
    // associations can be defined here
    Pizzeria.hasMany(models.Review, { foreignKey: "userId" });
    Pizzeria.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Pizzeria;
};