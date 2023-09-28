const path = require("path");
const express= require("express");

const expressConfig = (app) => {
  // setup static files да зареди css fails и да се дебъгва
  app.use(express.static(path.resolve(__dirname, "../public")));
};

module.exports = expressConfig;
