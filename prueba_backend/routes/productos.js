const express = require("express");
const {
  getProducts,
  getProductByID,
  createProduct,
  updateProduct,
  deleteProduct,
  getStockProduct,
  createSurvieProduct,
} = require("../controllers/productos");

const Rutas = express.Router();

Rutas.get("/", getProducts);
Rutas.get("/:id", getProductByID);
Rutas.post("/", createProduct);
Rutas.put("/:id", updateProduct);
Rutas.delete("/:id", deleteProduct);
Rutas.get("/:id/stock", getStockProduct);
Rutas.post("/:id/customer/:idCustomer", createSurvieProduct);

module.exports = Rutas;
