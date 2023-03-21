const express = require("express");
const bodyParser = require("body-parser");

const zipRoutes = require("./routes/zip");
const smsRoutes = require("./routes/sms");

const app = express();

app.use(bodyParser.json());

app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

app.use("/api/zip",zipRoutes);
app.use("/api/sms",smsRoutes);

module.exports = app;
