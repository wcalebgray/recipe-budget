const mongoose = require('mongoose');

function createDoc(modelName, doc) {
  const Model = getModel(modelName);
  return Model.create(doc);
};

function updateDoc(modelName, id, doc) {
  const Model = getModel(modelName);
  return Model.updateOne({_id: id}, doc);
}

function getDocById(modelName, id, populate) {
  const Model = getModel(modelName);
  let query = Model.findById(id);
  if (populate) {
    query.populate(populate);
  }
  return query;
}

function deleteDocById(modelName, id) {
  const Model = getModel(modelName);
  return Model.deleteOne({_id: id});
}

function findDocsByText(modelName, text) {
  const Model = getModel(modelName);
  const query = text ? {$text: {$search: text}} : {};
  return Model.find(query);
}

function getModel(modelName) {
  return mongoose.model(modelName);
}

module.exports = {
  createDoc: createDoc,
  updateDoc: updateDoc,
  getDocById: getDocById,
  deleteDocById: deleteDocById,
  findDocsByText: findDocsByText,
};
