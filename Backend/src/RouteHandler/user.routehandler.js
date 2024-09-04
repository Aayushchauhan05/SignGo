const express = require("express");
const authRoutes = require("../Routes/Auth.route");

module.exports = (app) => {
  app.use("/Auth", authRoutes);
};
