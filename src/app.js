const express = require('express'); // Import Express
const connectDB = require('./config/db');
const mongoose = require('mongoose'); // Import Mongoose to interact with MongoDB
const dotenv = require('dotenv'); // Import dotenv to load environment variables
const PhoneNumber = require('./models/PhoneNumber'); // Import the PhoneNumber model

// Load environment variables from .env file
// dotenv.config(); // This makes sure process.env.MONGO_URI and process.env.PORT are available
require('dotenv').config();

// Initialize the Express application
const app = express();

// Use JSON middleware to parse incoming requests with JSON payloads
app.use(express.json())

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/profile', require('./routes/profileRoutes'));

// Connect to MongoDB using the MONGO_URI from .env
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.error('MongoDB connection error:', err));
  
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
