const express = require("express");

const app = express();
const apiRouter = require("./src/routes/index");

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.status(200);
  res.send({ success: true, msg: "hello" });
});

app.listen(3000, () => {
  console.log("Server started successfully");
});
