const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection/index");

const OrderDetail = sequelize.define(
  "OrderDetail",
  {
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    UnitPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Discound: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = OrderDetail;
