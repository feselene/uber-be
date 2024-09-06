const PhoneNumber = require('../models/PhoneNumber'); // Import the PhoneNumber model

// Controller to add a new phone number
const addPhoneNumber = async (req, res) => {
  const { phoneNumber, date } = req.body;

  // Validation: ensure phoneNumber is provided
  if (!phoneNumber) {
    return res.status(400).json({ msg: 'Phone number is required' });
  }

  try {
    const newPhoneNumber = new PhoneNumber({ phoneNumber, date });
    await newPhoneNumber.save();
    res.status(201).json({ msg: 'Phone number added successfully', newPhoneNumber });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save phone number' });
  }
};

// Controller to get all phone numbers
const getPhoneNumbers = async (req, res) => {
  try {
    const phoneNumbers = await PhoneNumber.find(); // Retrieve all phone numbers from the database
    res.status(200).json(phoneNumbers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve phone numbers' });
  }
};

module.exports = {
  addPhoneNumber,
  getPhoneNumbers,
};
