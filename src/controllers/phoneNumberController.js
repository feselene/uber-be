// models/PhoneNumber.js
const mongoose = require('mongoose');

// Define schema for storing phone numbers
const PhoneNumberSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('PhoneNumber', PhoneNumberSchema);
