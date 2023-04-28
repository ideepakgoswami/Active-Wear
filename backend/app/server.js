// Import required modules
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRoute');
const dataRouter = require('./routes/dataRoute');


// Load environment variables from .env file
dotenv.config();

// Create an instance of the express application
const app = express();

// Configure middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/auth', authRouter);
app.use('/api/data', dataRouter);

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

