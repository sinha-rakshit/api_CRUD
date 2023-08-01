const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

let users = [];
// all the routes in here are starting with /users
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.FirstName} added to the Database`);
});

// /users/{id}
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const FoundUser = users.find((user) => user.id === id);
  res.send(FoundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} deleted from the database.`);
});

module.exports = router;
