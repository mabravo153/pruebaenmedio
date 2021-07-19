const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection/index");

const ProductSurvie = require("./calificacionproducto");
const Customer = require("./clientes");
const OrderDetail = require("./detalleordenes");
const Employee = require("./empleados");
const Order = require("./ordenes");

const Product = sequelize.define("Products", {
  ProductName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  QuantityPerUnit: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  UnitPrice: { type: DataTypes.DECIMAL, allowNull: false },
  UnitInStock: { type: DataTypes.INTEGER, allowNull: false },
  UnitsOnOrder: { type: DataTypes.INTEGER, allowNull: false },
  StatusID: { type: DataTypes.INTEGER, allowNull: false },
  CategoryID: { type: DataTypes.INTEGER, allowNull: false },
  SupplierID: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Product;

Employee.hasMany(Order, { foreignKey: "EmployeeID" });
Customer.hasMany(Order, { foreignKey: "CustomerID" });

Product.belongsToMany(Customer, {
  through: ProductSurvie,
  foreignKey: "ProductID",
});
Customer.belongsToMany(Product, {
  through: ProductSurvie,
  foreignKey: "CustomerID",
});

Product.hasMany(OrderDetail, { foreignKey: "ProductID" });
Order.hasMany(OrderDetail, { foreignKey: "OrderID" });
OrderDetail.belongsTo(Order);
Order.belongsTo(Employee);
Order.belongsTo(Customer);
