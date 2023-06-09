const { join } = require('path');

const clientError = (req, res) => {
  res.status(404).sendFile(join(__dirname, '..', '..', '..', 'public', 'errorPage', '404.html'));
};

// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  res.status(500).sendFile(join(__dirname, '..', '..', '..', 'public', 'errorPage', '500.html'));
};

module.exports = { clientError, serverError };
