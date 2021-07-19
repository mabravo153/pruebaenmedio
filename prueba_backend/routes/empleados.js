const express = require("express");

const Rutas = express.Router();

Rutas.get("/", (req, res) => {
  res.send("hola desde la ruta de empleados");
});

module.exports = Rutas;
