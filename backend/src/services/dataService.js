// backend/src/services/dataService.js

const sql = require('mssql');
const { azureConfig } = require('../config/azureConfig');

async function parseAndSaveData(jsonData) {
    try {
        // Establish a connection to the Azure SQL database
        const pool = await sql.connect(azureConfig);

        // Extract category and data fields from the JSON data
        const { category, data } = jsonData;

        // Insert data into the ClinicalData table
        await pool.request()
            .input('category', sql.VarChar, category)
            .input('data', sql.NVarChar, JSON.stringify(data)) // Storing JSON as a string
            .query('INSERT INTO ClinicalData (Category, Data) VALUES (@category, @data)');

        return { message: 'Data saved successfully!' };
    } catch (err) {
        console.error('Error parsing and saving data:', err);
        throw new Error('Data processing error');
    }
}

module.exports = { parseAndSaveData };

