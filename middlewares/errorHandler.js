const { SERVER__ERROR } = require('../utils/errors');

const errorHandler = ((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({ message: statusCode === 500 ? SERVER__ERROR : message });
  next();
});

module.exports = errorHandler;
