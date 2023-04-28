const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { USER_DB_URI, DATA_DB_URI } = process.env;


// Connect to the first database
const USER_DB = mongoose.createConnection(USER_DB_URI);

// Connect to the second database
const DATA_DB = mongoose.createConnection(DATA_DB_URI);

// Check connection status of the first database
USER_DB.on('open', () => {
    console.log('Connected to USER DATABASE');
});

// Check connection status of the second database
DATA_DB.on('open', () => {
    console.log('Connected to DATA DATABASE');
});

// Export the database connections
module.exports = { USER_DB, DATA_DB };
