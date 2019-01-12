const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const loadModels = require('./models/index').loadModels;

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongodb');
  loadModels(db);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import Routes directory
require('./routes')(app);

app.get('/', (req, res) => {
  res.send('PORT 5000');
});

app.listen(port, (err) => {
  if (err) { console.log(err); };
  console.log('Listening on port ' + port);
});
