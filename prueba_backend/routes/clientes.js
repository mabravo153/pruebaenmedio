const express = require("express");
const {
  getCustomers,
  getCustomerByID,
  getInfoOrder,
} = require("../controllers/clientes");

const Rutas = express.Router();

Rutas.get("/", getCustomers);
Rutas.get("/:id", getCustomerByID);
Rutas.get("/orders/max", getInfoOrder);

module.exports = Rutas;
