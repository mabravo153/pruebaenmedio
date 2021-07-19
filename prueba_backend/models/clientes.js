const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection/index");

const Customer = sequelize.define("Customers", {
  CustomerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CustomerLastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Customer;
