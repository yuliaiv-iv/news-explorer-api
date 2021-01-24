require('dotenv').config();

const DEV_URL = 'mongodb://localhost:27017/newsdb';

const {
  NODE_ENV, JWT_SECRET, PORT, API_URL,
} = process.env;

const JWT = NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret';
const URL = NODE_ENV === 'production' ? API_URL : DEV_URL;
const END_PORT = PORT || 3000;

module.exports = {
  JWT,
  URL,
  END_PORT,
};
