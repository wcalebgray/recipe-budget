const mongooseService = require('../../services/MongooseService');

module.exports = (app) => {

  app.post('/recipe', async (req, res) => {
    const recipe = req.body;
    const result = await mongooseService.createDoc('Recipe', recipe);
    res.send(result);
  });
};
