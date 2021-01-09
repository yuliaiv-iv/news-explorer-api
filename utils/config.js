require('dotenv').config();

const {
  NODE_ENV, JWT_SECRET,
} = process.env;

const JWT = NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret';

module.exports = {
  JWT,
};
