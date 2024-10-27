// backend/src/routes/fileRoutes.js

const express = require('express');
const { uploadFile, getFiles } = require('../controllers/fileController'); // Ensure the path is correct

const router = express.Router();

// Define your routes
router.post('/upload', uploadFile); // Handle file uploads
router.get('/', getFiles); // Get all files

module.exports = router; // Export the router
