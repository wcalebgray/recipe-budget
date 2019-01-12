const mongooseService = require('../../services/MongooseService');

module.exports = (app) => {

  app.delete('/recipe/:id', async (req, res) => {
    const id = req.params.id;
    const result = await mongooseService.deleteDocById('Recipe', id);
    res.send(result);
  });
};
