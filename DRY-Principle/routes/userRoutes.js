let Router = require("express").Router();
const CRUDController = require("../controllers/CRUDController");
let { user } = require("../models/user");
let userServiceClass = require("../services/user.service.js");
let userService = new userServiceClass(user);
let userController = new CRUDController(userService);

Router.post("/create", userController.create.bind(userController));
Router.get("/get/:id", userController.get.bind(userController));
Router.put("/update/:id", userController.update.bind(userController));
Router.delete("/delete/:id", userController.delete.bind(userController));

module.exports = Router;
