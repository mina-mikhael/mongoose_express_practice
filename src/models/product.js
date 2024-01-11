const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  price: { type: Number, required: true, min: 0 },
  category: {
    type: String,
    required: true,
    lowercase: true,
    enum: ["tackle", "bait", "clothing", "accessory"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
