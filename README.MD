## PROYECTO ENMEDIO

Dicho proyecto consta de dos Secciones.

### Primera Seccion

ArrayManipulation, es un ejercicio desarrollado en TypeScript, Compilado a Javascript para su ejecucion en nodejs

### Segunda Seccion

Proyecto Backend desarrollado en Nodejs. con ORM sequelize, usando Docker y una base de datos relacional como mariaDB

#### Installation

---

El proyecto usa docker para su ejecucion, lo cual es necesario tenerlo instalado

```
$ git clone https://github.com/mabravo153/pruebaenmedio
$ cd pruebaenmedio/prueba_backend
$ docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
```

### Eleccion de diseño de base de datos

Dicho diseño lo elegi teniendo en cuenta los requerimientos que eran requeridos por el usuario.

ya que el usuario queria tener informacion sobre sus productos. usuarios y empleados, usar una base de datos relacional como mariadb me permita realizar una busqueda mas sencilla teniendo en cuenta dichos requerimientos,ademas de las antes mencionadas relaciones entre las tablas
