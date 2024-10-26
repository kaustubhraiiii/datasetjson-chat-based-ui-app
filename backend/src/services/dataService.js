// backend/src/services/dataService.js
const { sql } = require('../dbConfig');

const saveDataToDatabase = async (data) => {
    const transaction = new sql.Transaction();
    try {
        await transaction.begin();

        const request = new sql.Request(transaction);
        for (const item of data) {
            await request
                .input('patientId', sql.NVarChar, item.patientId)
                .input('age', sql.Int, item.age)
                .input('diagnosis', sql.NVarChar, item.diagnosis)
                .input('treatment', sql.NVarChar, item.treatment)
                .input('dateOfVisit', sql.Date, item.dateOfVisit)
                .query('INSERT INTO ClinicalData (patientId, age, diagnosis, treatment, dateOfVisit) VALUES (@patientId, @age, @diagnosis, @treatment, @dateOfVisit)');
        }

        await transaction.commit();
        console.log('Data saved to database successfully.');
    } catch (err) {
        await transaction.rollback();
        console.error('Error saving data to database:', err);
    }
};

module.exports = { saveDataToDatabase };
