let Router = require("express").Router();
const CRUDController = require("../controllers/CRUDController");
let { order } = require("../models/order");
let orderServiceClass = require("../services/order.service.js");
let orderService = new orderServiceClass(order);
let orderController = new CRUDController(orderService);

Router.post("/create", orderController.create.bind(orderController));
Router.get("/get/:id", orderController.get.bind(orderController));
Router.put("/update/:id", orderController.update.bind(orderController));
Router.delete("/delete/:id", orderController.delete.bind(orderController));
Router.get("/userOrders/:userId", async (Req, Res) => {
  let Ans = await orderService.getUserOrders(Req.params.userId);

  Res.json({ Ans });
});

module.exports = Router;
