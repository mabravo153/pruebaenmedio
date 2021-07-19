const express = require("express");
const {
  getOrders,
  createOrder,
  getOrderDetails,
} = require("../controllers/ordenes");

const Rutas = express.Router();

Rutas.get("/", getOrders);
Rutas.get("/:id/details", getOrderDetails);
Rutas.post("/", createOrder);

module.exports = Rutas;
