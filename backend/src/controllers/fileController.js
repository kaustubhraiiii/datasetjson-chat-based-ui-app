// backend/src/controllers/fileController.js

const dataService = require('../services/dataService');

// Upload a file and save its data to the Azure SQL Database
const uploadFile = async (req, res) => {
  try {
    // Parse the JSON file
    const jsonData = JSON.parse(req.file.buffer.toString());

    // Save the parsed data to the database using dataService
    const saveResult = await dataService.parseAndSaveData(jsonData);
    res.status(200).json(saveResult);
  } catch (error) {
    console.error('Error in file upload:', error);
    res.status(500).json({ message: 'File upload and data save error', error });
  }
};

// Retrieve all available files or parameters stored
const getFiles = async (req, res) => {
  try {
    const files = await dataService.getAllFiles(); // Fetch files or parameters
    res.status(200).json({ files });
  } catch (error) {
    console.error('Error fetching files:', error);
    res.status(500).json({ message: 'Error retrieving files', error });
  }
};

// Fetch data for a specific parameter from the database
const getParameterData = async (req, res) => {
  const { parameter } = req.query;
  try {
    const data = await dataService.getDataByParameter(parameter);
    res.status(200).json({ data });
  } catch (error) {
    console.error('Error fetching parameter data:', error);
    res.status(500).json({ message: 'Error fetching parameter data', error });
  }
};

module.exports = {
  uploadFile,
  getFiles,
  getParameterData,
};
