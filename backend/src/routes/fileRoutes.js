// backend/src/app.js

const express = require('express');
const cors = require('cors');
const fileRoutes = require('./routes/fileRoutes');
const errorHandler = require('./utils/errorHandler');
const { connectToDatabase } = require('./dbConfig');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/files', fileRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
