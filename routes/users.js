const express = require("express");
const router = express.Router();

const users = [
  {
    FirstName: "Aditya",
    LastName: "Raj",
    Age: 30,
  },
];
// all the routes in here are starting with /users
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  console.log("Post Route Reached");

  const user = req.body;
  users.push(user);

  res.send(`User with the name ${user.FirstName} added to the Database`);
});

module.exports = router;
