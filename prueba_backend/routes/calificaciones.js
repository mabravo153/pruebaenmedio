const express = require("express");
const { getSurviesProduct } = require("../controllers/productos");

const Rutas = express.Router();

Rutas.get("/", getSurviesProduct);

module.exports = Rutas;
