const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const authRouter = require("./src/routes/authRouter");
const apiRouter = require("./src/routes/index");

const { connect } = require("./src/config/database");
require("./src/util/auth");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", authRouter);
app.use("/api", passport.authenticate("jwt", { session: false }), apiRouter);

app.listen(3000, async () => {
  await connect();
  console.log("MongoDb connected successfully");
  console.log("Server started successfully");
});
