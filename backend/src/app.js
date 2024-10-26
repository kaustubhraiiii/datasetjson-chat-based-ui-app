// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/dataRoutes');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./utils/errorHandler');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config(); 

const app = express();

// Middleware setup
app.use(bodyParser.json());

// Route definitions
app.get('/', (req, res) => {
  res.send('Welcome to the API! Use /api/data or /api/user to access specific routes.');
});

app.use('/api/data', dataRoutes);
app.use('/api/user', userRoutes);

// Error handling middleware
app.use(errorHandler);

// Export the app to be used in server.js
module.exports = app;


