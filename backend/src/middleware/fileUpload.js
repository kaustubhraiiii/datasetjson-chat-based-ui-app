// backend/src/middleware/fileUpload.js

const multer = require('multer');

// Use memory storage for temporary storage of uploaded files
const storage = multer.memoryStorage();

// Create the multer upload instance with the specified storage
const upload = multer({ storage });

// Export the upload middleware for use in routes
module.exports = upload;
