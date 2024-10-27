// src/server.js
const express = require('express');
const cors = require('cors'); // Import CORS if needed
const fileRoutes = require('./routes/fileRoutes'); // Ensure the path is correct

const app = express();
const PORT = process.env.PORT || 3001; // Default to port 3001 if not specified

// Middleware
app.use(cors()); // Enable CORS if frontend and backend are on different ports
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

// Routes
app.use('/api/files', fileRoutes); // Use the file routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
