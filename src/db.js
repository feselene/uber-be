const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        // TODO: Add parameters to mongoose.connect()
        await mongoose.connect();
        console.log('MongoDB connected successfully :)');
    } catch (err) {
        console.error('Got an error in connectDB:', err.message);
        process.exit(1);
    }
}

module.exports = connectDB; 