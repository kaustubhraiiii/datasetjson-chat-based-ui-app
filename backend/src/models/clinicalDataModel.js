// backend/src/models/clinicalDataModel.js

const sql = require('mssql');
const { poolPromise } = require('../dbConfig');

// Function to insert clinical data
const insertClinicalData = async (data) => {
    const pool = await poolPromise;
    const result = await pool.request()
        .input('patientId', sql.VarChar, data.patientId)
        .input('age', sql.Int, data.age)
        .input('diagnosis', sql.VarChar, data.diagnosis)
        .input('treatment', sql.VarChar, data.treatment)
        .input('dateOfVisit', sql.Date, data.dateOfVisit)
        .query(`
            INSERT INTO ClinicalData (patientId, age, diagnosis, treatment, dateOfVisit)
            VALUES (@patientId, @age, @diagnosis, @treatment, @dateOfVisit)
        `);
    return result;
};

// Function to retrieve clinical data
const getClinicalData = async () => {
    const pool = await poolPromise;
    const result = await pool.request()
        .query('SELECT * FROM ClinicalData');
    return result.recordset;
};

module.exports = {
    insertClinicalData,
    getClinicalData
};
