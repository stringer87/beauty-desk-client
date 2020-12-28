const mongoose = require('mongoose');

const client = new mongoose.Schema({
  _id: Number,
  firstName: String,
  lastName: String,
  email: String,
  professional: Array
})
