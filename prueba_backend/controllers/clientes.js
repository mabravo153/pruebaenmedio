const Customer = require("../models/clientes");
const Order = require("../models/ordenes");
const OrderDetail = require("../models/detalleordenes");

exports.getCustomers = async (req, res) => {
  try {
    const user = await Customer.findAll();

    if (user.length) {
      res.status(200).json({
        msg: user,
        code: 200,
      });
    } else {
      res.status(404).json({
        msg: "user not found",
        code: 404,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: `Error ${error}`,
      code: 500,
    });
  }
};

exports.getCustomerByID = async (req, res) => {
  let { id } = req.params;

  try {
    const user = await Customer.findOne({
      where: {
        id,
      },
    });

    if (user) {
      res.status(200).json({
        msg: user,
        code: 200,
      });
    } else {
      res.status(404).json({
        msg: "User Not Found",
        code: 404,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: `Error ${error}`,
      code: 500,
    });
  }
};

exports.getInfoOrder = async (req, res) => {
  try {
    let customerOrders = await Customer.findAll({
      include: Order,
      limit: 5,
    });

    res.status(200).json({
      msg: customerOrders,
      code: 200,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Ocurrio un error al consultar",
      code: 500,
    });
  }
};
