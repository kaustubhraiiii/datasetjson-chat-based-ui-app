// backend/src/controllers/fileController.js
const fs = require('fs');
const path = require('path');
const dataService = require('../services/dataService');

const uploadFile = async (req, res) => {
    const filePath = path.join(__dirname, '../../uploads', req.file.filename);

    // Read and parse the JSON file
    fs.readFile(filePath, 'utf8', async (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading file', error: err });
        }

        try {
            const jsonData = JSON.parse(data);
            await dataService.saveDataToDatabase(jsonData); // Save data to Azure SQL Database
            res.status(200).json({ message: 'File uploaded and parsed', data: jsonData });
        } catch (parseErr) {
            res.status(500).json({ message: 'Error parsing JSON', error: parseErr });
        }
    });
};

module.exports = { uploadFile };
