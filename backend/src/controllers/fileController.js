// backend/src/controllers/fileController.js

const { parseAndSaveData } = require('../services/dataService');
const sql = require('mssql');

// Upload file function
async function uploadFile(req, res, next) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'File is required' });
    }

    const jsonData = JSON.parse(req.file.buffer.toString());
    const result = await parseAndSaveData(jsonData);

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

// Get files function
async function getFiles(req, res, next) {
  try {
    // Establish a connection to the Azure SQL database
    const pool = await sql.connect({
      user: process.env.DB_USER || 'kaust',
      password: process.env.DB_PASSWORD || 'biohack_1234',
      server: process.env.DB_SERVER || 'datasetjson-server.database.windows.net',
      database: process.env.DB_NAME || 'jsondataset-db',
      options: {
        encrypt: true,
        enableArithAbort: true,
      },
    });

    // Query to retrieve all files from the ClinicalData table
    const result = await pool.request()
      .query('SELECT * FROM ClinicalData');

    // Send the retrieved files as a response
    res.status(200).json(result.recordset); // `result.recordset` contains the query results
  } catch (err) {
    console.error('Error fetching files:', err);
    next(err); // Pass the error to the error handler middleware
  }
}

module.exports = { uploadFile, getFiles }; // Ensure both functions are exported
