const mongooseService = require('../../services/MongooseService');

module.exports = (app) => {

  app.post('/item', async (req, res) => {
    const item = req.body;
    const result = await mongooseService.createDoc('Item', item);
    res.send(result);
  });
};
