const mongooseService = require('../../services/MongooseService');

module.exports = (app) => {

  app.put('/recipe/:id', async (req, res) => {
    const recipe = req.body;
    const id = req.params.id;
    const result = await mongooseService.updateDoc('Recipe', id, recipe);
    res.send(result);
  });
};
