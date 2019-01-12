const mongooseService = require('../../services/MongooseService');

module.exports = (app) => {

  app.get('/recipes', async (req, res) => {
    const text = req.query.text;
    const result = await mongooseService.findDocsByText('Recipe', text);
    res.send(result);
  });
};
