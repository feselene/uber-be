const express = require('express');
const { addPhoneNumber, getPhoneNumbers } = require('../controllers/phoneNumberController');
const phoneNumberController = require('../controllers/phoneNumberController'); // Ensure correct import
const router = express.Router();

// Route to add a phone number
router.post('/add', addPhoneNumber);

// Route to get all phone numbers
router.get('/', getPhoneNumbers);

module.exports = router;
