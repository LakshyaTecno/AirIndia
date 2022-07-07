const express = require("express");
const User = require("./src/models/user");
const { connect } = require("./src/config/database");

const app = express();
const apiRouter = require("./src/routes/index");

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.status(200);
  res.send({ success: true, msg: "hello" });
});

app.listen(3000, async () => {
  await connect();
  console.log("MongoDb connected successfully");
  console.log("Server started successfully");
  let user = User.create({
    email: "abc@.xyz.com",
    password: 12345,
    username: "ABC",
  });
});
