const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Application', ApplicationSchema);
