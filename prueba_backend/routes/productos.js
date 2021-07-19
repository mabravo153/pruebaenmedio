const express = require("express");
const {
  getProducts,
  getProductByID,
  createProduct,
  updateProduct,
  deleteProduct,
  getStockProduct,
} = require("../controllers/productos");

const Rutas = express.Router();

Rutas.get("/", getProducts);
Rutas.get("/:id", getProductByID);
Rutas.post("/", createProduct);
Rutas.put("/:id", updateProduct);
Rutas.delete("/:id", deleteProduct);
Rutas.get("/:id/stock", getStockProduct);

module.exports = Rutas;
