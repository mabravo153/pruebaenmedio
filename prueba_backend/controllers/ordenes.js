const Order = require("../models/ordenes");
const OrderDetail = require("../models/detalleordenes");

exports.getOrders = async (req, res) => {
  try {
    let orders = await Order.findAll({
      include: OrderDetail,
    });

    if (orders.length) {
      res.status(200).json({
        msg: orders,
        code: 200,
      });
    } else {
      res.status(404).json({
        msg: "Orders not found",
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

exports.createOrder = async (req, res) => {
  try {
    let {
      OrderDate,
      RequiredDate,
      ShippedDate,
      CustomerID,
      EmployeeID,
      ProductID,
      UnitPrice,
      Quantity,
      Discound,
    } = req.body;

    let orden = {
      OrderDate,
      RequiredDate,
      ShippedDate,
      CustomerID,
      EmployeeID,
    };

    let orderResponse = await Order.create(orden);

    if (orderResponse) {
      let { id } = orderResponse;

      await OrderDetail.create({
        OrderID: id,
        ProductID,
        UnitPrice,
        Quantity,
        Discound,
      });

      res.status(200).json({
        msg: "Product Created",
        code: 200,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: error,
      code: 500,
    });
  }
};

exports.getOrderDetails = async (req, res) => {
  let { id } = req.params;
  try {
    let orderInfo = await OrderDetail.findOne({
      where: {
        OrderID: id,
      },
      include: Order,
    });

    if (orderInfo) {
      res.status(200).json({
        msg: orderInfo,
        code: 200,
      });
    } else {
      res.status(400).json({
        msg: "Order not found",
        code: 400,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: error,
      code: 500,
    });
  }
};
