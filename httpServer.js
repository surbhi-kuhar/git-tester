const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const user = require("./routes/userRoutes");

app.use(bodyParser.json());

app.use("/api/user", user);

app.listen(8000, () => {
  console.log("server running");
});

module.exports = app;
