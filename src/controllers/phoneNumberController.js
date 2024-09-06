const PhoneNumber = require('../models/PhoneNumber'); // Import the PhoneNumber model

// Add a new phone number
exports.addPhoneNumber = async (req, res) => {
  try {
    const { phoneNumber } = req.body; // Extract phoneNumber from request body

    if (!phoneNumber) {
      return res.status(400).json({ msg: 'Phone number is required' });
    }

    // Create a new phone number document
    const newPhoneNumber = new PhoneNumber({
      phoneNumber,
      date: new Date(), // Set the current date
    });

    // Save the phone number to the database
    await newPhoneNumber.save();

    // Send response
    res.status(201).json({ msg: 'Phone number added successfully', data: newPhoneNumber });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
