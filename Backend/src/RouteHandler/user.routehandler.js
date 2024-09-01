const express = require("express");
const router = require("../Routes/Auth.route");



module.exports = (app) => {
  app.use("/user", router);
  
};
