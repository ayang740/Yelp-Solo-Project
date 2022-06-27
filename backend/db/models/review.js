'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    review: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    shopId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};