// backend/src/services/dataService.js

const sql = require('mssql');
const { azureConfig } = require('../config/azureConfig');

async function parseAndSaveData(jsonData) {
  try {
    const pool = await sql.connect(azureConfig);
    const { category, data } = jsonData;

    await pool.request()
      .input('category', sql.VarChar, category)
      .input('data', sql.NVarChar, JSON.stringify(data))
      .query('INSERT INTO ClinicalData (Category, Data) VALUES (@category, @data)');

    return { message: 'Data saved successfully!' };
  } catch (err) {
    console.error('Error parsing and saving data:', err);
    throw new Error('Data processing error');
  }
}

async function getAllFiles() {
  try {
    const pool = await sql.connect(azureConfig);
    const result = await pool.request().query('SELECT Category FROM ClinicalData');
    const categories = result.recordset.map(row => row.Category);
    return categories;
  } catch (err) {
    console.error('Error retrieving files:', err);
    throw new Error('Error fetching files');
  }
}

async function getDataByParameter(parameter) {
  try {
    const pool = await sql.connect(azureConfig);
    const result = await pool.request()
      .input('category', sql.VarChar, parameter)
      .query('SELECT Data FROM ClinicalData WHERE Category = @category');

    return result.recordset.length ? JSON.parse(result.recordset[0].Data) : null;
  } catch (err) {
    console.error('Error fetching parameter data:', err);
    throw new Error('Error fetching parameter data');
  }
}

module.exports = { parseAndSaveData, getAllFiles, getDataByParameter };

