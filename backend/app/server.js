// Import required modules
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRouter = require('./routes/authRoute');
const dataRouter = require('./routes/dataRoute');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

// Create an instance of the express application
const app = express();

// Configure middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../client/build')));

//Routes
app.use('/api/auth', authRouter);
app.use('/api/data', dataRouter);

// Define routes
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"),
        function (err) {
            if (err) {
                res.status(500).send(err)
            }
        }
    );
});

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

