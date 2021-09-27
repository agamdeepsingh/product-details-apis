const mongoose = require("mongoose");

const product = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  }
}, 
{
  timestamps: true,
});

const productDetail = mongoose.model("productDetail", product);
module.exports = productDetail;
