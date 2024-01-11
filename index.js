const express = require("express");
const server = express();
const port = 8080;
const mongoose = require("mongoose");

server.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/baitShop")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
    console.log(err);
  });

server.get("/fish", (req, res) => {
  res.send("Hello World");
});

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
