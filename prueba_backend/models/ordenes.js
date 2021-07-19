const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection/index");

const Order = sequelize.define("Orders", {
  OrderDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  RequiredDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  ShippedDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  CustomerID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  EmployeeID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Order;
