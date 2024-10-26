// backend/src/server.js

const app = require('./app');
const { connectToDatabase } = require('./dbConfig');

const PORT = process.env.PORT || 3000;

// Start the server and connect to the database
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectToDatabase();
});
