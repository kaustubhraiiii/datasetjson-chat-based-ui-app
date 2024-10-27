// backend/src/server.js

const app = require('./app'); // Import the app
const { connectToDatabase } = require('./config/azureConfig');

// Connect to the database and start the server
connectToDatabase()
  .then(() => {
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to the database:', error);
  });
