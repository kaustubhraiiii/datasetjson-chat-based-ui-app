// backend/src/middleware/fileUpload.js

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = upload;

