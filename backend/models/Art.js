const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
  price: Number
});

module.exports = mongoose.model('Art', artSchema);
