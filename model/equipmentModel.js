const mongoose = require("mongoose");

const schema = mongoose.Schema({
  img: String,
  type: String,
  name: String,
  price: Number,
  rating: Number,
});

const ecomModel = mongoose.model("equipmentProducts", schema)

module.exports = ecomModel;