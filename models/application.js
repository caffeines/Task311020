const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
});

module.exports = mongoose.model('Application', ApplicationSchema);
