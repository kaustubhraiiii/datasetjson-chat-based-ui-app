// backend/src/app.js

const express = require('express');
const cors = require('cors');
const fileRoutes = require('./routes/fileRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

module.exports = app;
