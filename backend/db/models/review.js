'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    reviewText: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    pizzaPlaceId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.PizzaPlace, { foreignKey: "pizzaPlaceId" });
  };
  return Review;
};