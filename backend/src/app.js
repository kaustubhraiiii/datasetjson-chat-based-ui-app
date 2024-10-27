// backend/src/app.js

const express = require('express');
const fileRoutes = require('./routes/fileRoutes');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define the route for the root
app.get('/', (req, res) => {
  res.send('Welcome to the Clinical Data Interaction Platform API!');
});

// Use file routes
app.use('/api/files', fileRoutes);

// Handle 404 errors for unmatched routes
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Export the app for use in server.js
module.exports = app;
