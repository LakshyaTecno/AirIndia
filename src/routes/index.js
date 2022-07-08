const express = require("express");
const passport = require("passport");

const app = express();

const v1Routes = require("./v1");

app.use("/v1", v1Routes);

module.exports = app;
