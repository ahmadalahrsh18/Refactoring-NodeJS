var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var app = express();
let { Connect } = require("./DB");
let userRoutes = require("./routes/userRoutes");
let orderRoutes = require("./routes/orderRoutes");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/user", userRoutes);
app.use("/order", orderRoutes);

app.listen(1212, async () => {
  await Connect();
  console.log("Running ...");
});
