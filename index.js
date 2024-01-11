const express = require("express");
const server = express();
const port = 8080;
const mongoose = require("mongoose");
const Product = require("./src/models/product");

server.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/baitShop")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
    console.log(err);
  });

server.get("/products", async (req, res, next) => {
  try {
    const dbRes = await Product.find({});
    const products = dbRes.map((product) => {
      return {
        id: product._id,
        name: product.name,
        price: product.price,
        category: product.category,
      };
    });
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something went wrong");
});

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
