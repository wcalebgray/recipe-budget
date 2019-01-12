const mongooseService = require('../../services/MongooseService');

module.exports = (app) => {

  app.get('/recipe/:id', async (req, res) => {
    const id = req.params.id;
    const result = await mongooseService.getDocById('Recipe', id, 'ingredients.item');
    res.send(result);
  });
};
