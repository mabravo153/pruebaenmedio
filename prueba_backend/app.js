const express = require("express");
const cors = require("cors");

const { coneccion } = require("./connection/index");

const productosRuta = require("./routes/productos");
const empleadosRuta = require("./routes/empleados");
const usuariosRuta = require("./routes/clientes");
const ordenesRuta = require("./routes/ordenes");
const calificaionesRuta = require("./routes/calificaciones");

const app = express();

let PORT = process.env.PORT || 3000;

let rutas = {
  productos: "/api/products",
  empleados: "/api/employees",
  clientes: "/api/customers",
  ordenes: "/api/orders",
  calificaciones: "/api/survies",
};

coneccion();

app.use(express.json());
app.use(cors());
app.use(rutas.productos, productosRuta);
app.use(rutas.empleados, empleadosRuta);
app.use(rutas.clientes, usuariosRuta);
app.use(rutas.ordenes, ordenesRuta);
app.use(rutas.calificaciones, calificaionesRuta);

app.listen(PORT, () => {
  console.log("escuchando desde el puerto 3000");
});
