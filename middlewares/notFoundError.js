const NotFoundError = require('../errors/not-found-error');
const { NOT_FOUND_ERROR } = require('../utils/errors');

const notFoundError = ('*', (req, res, next) => {
  next(new NotFoundError(NOT_FOUND_ERROR));
});

module.exports = notFoundError;
