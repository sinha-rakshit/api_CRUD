const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000; //process.env.PORT means watherver is in the environment variable PORT or 3000 if there's nothing there

app.use(bodyParser.json()); //line basically tells that we are going to use JSON data in the application

app.listen(PORT, () =>
  console.log(`Server Running on port :http://localhost:${PORT}`)
);
