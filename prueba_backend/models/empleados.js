const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection/index");

const Employee = sequelize.define("Employees", {
  EmployeeName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  EmployeeLastname: {
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
  Area: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Employee;
