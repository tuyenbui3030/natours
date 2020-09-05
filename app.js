const express = require("express");
const morgan = require("morgan");

const tourRouter = require("./router/tourRoutes");
const userRouter = require("./router/userRoutes");

const app = express();

//1 - MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello from the middleware 👋");
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//2 - ROUTER HANDLERS

//3 - ROUTES

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

//4. START SERVER
module.exports = app;
