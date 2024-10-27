const express = require('express');
const router = express.Router();
const upload = require('../middleware/fileUpload'); // Import your file upload middleware
const { uploadFile, getFiles, getParameterData } = require('../controllers/fileController'); // Adjust path as necessary

// Route for uploading a file
router.post('/upload', upload.single('file'), (req, res) => {
  try {
    // Check if a file was uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    // Process the file as needed (e.g., parse JSON, etc.)
    const jsonData = JSON.parse(req.file.buffer.toString());
    console.log("Parsed JSON Data:", jsonData);

    // Extract parameters from the first patient as an example
    const parameters = Object.keys(jsonData.patients[0]);
    res.status(200).json({ parameters });
  } catch (error) {
    console.error("Error processing file:", error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// Route for retrieving all available files or parameters
router.get('/files', getFiles); // Endpoint for fetching all files

// Route for fetching parameter-specific data
router.get('/data', getParameterData); // Endpoint for parameter-specific data

module.exports = router;
