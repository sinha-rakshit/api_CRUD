const express = require("express");
const router = express.Router();

// all the routes in here are starting with /users
router.get("/", (req, res) => {
  res.send("Hello(from route:(user))");
});

module.exports = router;
