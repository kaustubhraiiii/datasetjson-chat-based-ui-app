// backend/src/utils/errorHandler.js

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ error: err.message || 'An unknown error occurred' });
}

module.exports = errorHandler;
