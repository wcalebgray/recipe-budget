const mongooseService = require('../../services/MongooseService');

module.exports = (app) => {

  app.get('/item/:id', async (req, res) => {
    const id = req.params.id;
    const result = await mongooseService.getDocById('Item', id);
    res.send(result);
  });
};
