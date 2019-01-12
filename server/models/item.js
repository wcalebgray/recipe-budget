const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = {
  name: {type: String, text: true},
  quantity: Number,
  metric: String,
  price: Number,
};

module.exports = new Schema(ItemSchema);
