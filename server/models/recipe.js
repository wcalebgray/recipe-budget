const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = {
  name: {type: String, text: true},
  ingredients: [
    {
      item: {type: Schema.Types.ObjectId, ref: 'Item'},
      quantity: Number,
      metric: String,
    },
  ],
  type: String,
  price: Number,
};

module.exports = new Schema(RecipeSchema);
