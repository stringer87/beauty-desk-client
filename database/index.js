const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/clients', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected to db')
});

module.exports = { db }