const jwt = require('jsonwebtoken');
const AuthorizationError = require('../errors/authorization-error');
const { AUTH_ERROR } = require('../utils/errors');
const { JWT } = require('../utils/config');

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new AuthorizationError(AUTH_ERROR);
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, JWT);
  } catch (err) {
    throw new AuthorizationError(AUTH_ERROR);
  }
  req.user = payload;
  next();
};

module.exports = auth;
