const sql = require('mssql');

const config = {
  user: process.env.DB_USER || 'kaust',
  password: process.env.DB_PASSWORD || 'biohack_1234',
  server: process.env.DB_SERVER || 'datasetjson-server.database.windows.net',
  database: process.env.DB_NAME || 'jsondataset-db',
  options: {
    encrypt: true,
    enableArithAbort: true,
  },
};

async function connectToDatabase() {
  try {
    const pool = await sql.connect(config);
    console.log('Connected to Azure SQL Database');
    return pool;
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}

module.exports = { connectToDatabase };
