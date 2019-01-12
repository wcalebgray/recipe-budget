const mongooseService = require('../../services/MongooseService');

module.exports = (app) => {

  app.put('/item/:id', async (req, res) => {
    const item = req.body;
    const id = req.params.id;
    const result = await mongooseService.updateDoc('Item', id, item);
    res.send(result);
  });
};
