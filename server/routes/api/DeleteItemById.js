const mongooseService = require('../../services/MongooseService');

module.exports = (app) => {

  app.delete('/item/:id', async (req, res) => {
    const id = req.params.id;
    const result = await mongooseService.deleteDocById('Item', id);
    res.send(result);
  });
};
