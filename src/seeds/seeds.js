const mongoose = require("mongoose");
const Product = require("../models/product");

mongoose
  .connect("mongodb://127.0.0.1:27017/baitShop")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
    console.log(err);
  });

const productsArr = [
  {
    name: "shrimp",
    price: 5.99,
    category: "bait",
  },
  {
    name: "crab",
    price: 7.99,
    category: "bait",
  },
  {
    name: "worms",
    price: 2.99,
    category: "bait",
  },
  {
    name: "bobber",
    price: 1.99,
    category: "tackle",
  },
  {
    name: "hook",
    price: 0.99,
    category: "tackle",
  },
  {
    name: "sinkers",
    price: 1.99,
    category: "tackle",
  },
  {
    name: "fishing pole",
    price: 29.99,
    category: "tackle",
  },
  {
    name: "fishing net",
    price: 19.99,
    category: "tackle",
  },
  {
    name: "fishing hat",
    price: 9.99,
    category: "clothing",
  },
  {
    name: "fishing shirt",
    price: 14.99,
    category: "clothing",
  },
  {
    name: "fishing reel",
    price: 24.99,
    category: "tackle",
  },
];

Product.insertMany(productsArr)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
