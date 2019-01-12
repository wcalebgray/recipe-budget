const mongooseService = require('../../services/MongooseService');

module.exports = (app) => {

  app.get('/items', async (req, res) => {
    const text = req.query.text;
    const result = await mongooseService.findDocsByText('Item', text);
    res.send(result);
  });
};
