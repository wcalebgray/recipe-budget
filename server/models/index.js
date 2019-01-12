const ItemSchema = require('./item');
const RecipeSchema = require('./recipe');

module.exports = {
  loadModels: function(db) {
    db.model('Item', ItemSchema);
    db.model('Recipe', RecipeSchema);
  },
};
