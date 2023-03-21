const express = require("express");

const router = express.Router();

router.post("", (request, response, next) => {
  console.log(request.body);
  response.send("hi sms")
});

router.use("", (request, response, next) => {
    
    response.send("hi sms get")
});

module.exports = router;