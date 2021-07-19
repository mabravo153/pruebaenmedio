const Product = require("../models/productos");
const { Op } = require("sequelize");
const ProductSurvie = require("../models/calificacionproducto");

exports.getProducts = async (req, res) => {
  try {
    let products = await Product.findAll({
      include: ProductSurvie,
    });

    if (products.length) {
      res.status(200).json({
        msg: products,
        code: 200,
      });
    } else {
      res.status(404).json({
        msg: "Products not found",
        code: 404,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: error,
      code: 500,
    });
  }
};

exports.getProductByID = async (req, res) => {
  let { id } = req.params;

  try {
    let products = await Product.findOne({
      where: {
        id,
      },
      include: ProductSurvie,
    });

    if (products) {
      res.status(200).json({
        msg: products,
        code: 200,
      });
    } else {
      res.status(404).json({
        msg: "Products not found",
        code: 404,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: error,
      code: 500,
      id,
    });
  }
};

exports.createProduct = async (req, res) => {
  let body = req.body;

  try {
    const newProduct = await Product.create(body);
    res.status(200).json({
      msg: newProduct,
      code: 200,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Ocurrio un error al intentar ingresar el producto, valida la informacion",
      code: 500,
    });
  }
};

exports.updateProduct = async (req, res) => {
  let body = req.body;
  let { id } = req.params;

  try {
    const updateProduct = await Product.update(body, {
      where: {
        id,
      },
    });

    if (updateProduct[0] == 1) {
      res.status(200).json({
        msg: "Product Updated",
        code: 200,
      });
    } else {
      res.status(404).json({
        msg: "Product Not Found",
        code: 404,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Ocurrio un error al Actualizar el producto",
      code: 500,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  let { id } = req.params;

  try {
    const deleteProduct = await Product.destroy({
      where: {
        id,
      },
    });

    if (deleteProduct == 1) {
      res.status(200).json({
        msg: "Product Deleted",
        code: 200,
      });
    } else {
      res.status(404).json({
        msg: "Product Not Found",
        code: 404,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Ocurrio un error al Actualizar el producto",
      code: 500,
    });
  }
};

exports.getStockProduct = async (req, res) => {
  let { id } = req.params;
  try {
    const stockProduct = await Product.findOne({
      where: {
        id,
      },
    });

    if (stockProduct) {
      const { UnitInStock } = stockProduct;

      if (UnitInStock >= 3) {
        res.status(200).json({
          msg: stockProduct,
          code: 200,
        });
      } else if (UnitInStock >= 1 && UnitInStock < 3) {
        res.status(200).json({
          msg: stockProduct,
          code: 200,
          info: "Producto con stock bajo",
        });
      } else {
        res.status(200).json({
          msg: stockProduct,
          code: 200,
          info: "Producto sin Stock",
        });
      }
    } else {
      res.status(404).json({
        msg: "Product Not Found",
        code: 404,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Ocurrio un error al Actualizar el producto",
      code: 500,
    });
  }
};

exports.createSurvieProduct = async (req, res) => {
  let { id, idCustomer } = req.params;

  let { Survie } = req.body;

  try {
    await ProductSurvie.create({
      ProductID: id,
      CustomerID: idCustomer,
      Survie,
    });

    res.status(201).json({
      msg: "Survie Created",
      code: 201,
    });
  } catch (error) {
    res.status(500).json({
      msg: error,
      code: 500,
    });
  }
};

exports.getSurviesProduct = async (req, res) => {
  try {
    const survies = await ProductSurvie.findAll({
      include: Product,
    });

    res.status(200).json({
      msg: survies,
      code: 200,
    });
  } catch (error) {
    res.status(500).json({
      msg: error,
      code: 500,
    });
  }
};
