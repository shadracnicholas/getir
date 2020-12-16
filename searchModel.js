const mongoose = require('mongoose');

// Records Schema
const recordSchema = mongoose.Schema({
  key: String,
  value: String,
  createdAt: Date,
  counts: [Number],
});

module.exports = mongoose.model('record', recordSchema);
