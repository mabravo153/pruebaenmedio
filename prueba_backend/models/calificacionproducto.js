const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection/index");

const ProductSurvie = sequelize.define(
  "ProductSurvie",
  {
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Survie: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = ProductSurvie;
