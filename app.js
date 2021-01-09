const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const { errors } = require('celebrate');
const limiter = require('./middlewares/limiter');
const routers = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const notFoundError = require('./middlewares/notFoundError');
const errorHandler = require('./middlewares/errorHandler');
// const NotFoundError = require('./errors/not-found-error');
// const { NOT_FOUND_ERROR } = require('./utils/errors');
// const { SERVER__ERROR } = require('./utils/errors');

const {
  PORT = 3000,
  MONGO_URL = 'mongodb://localhost:27017/newsdb',
} = process.env;

const app = express();

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(helmet());
app.use(limiter);
app.use(bodyParser.json());
app.use(requestLogger);
app.use(routers);
app.use(errorLogger);
app.use(errors());

// app.use('*', (req, res, next) => {
//   next(new NotFoundError(NOT_FOUND_ERROR));
// });
app.use(notFoundError);
app.use(errorHandler);

// app.use((err, req, res, next) => {
//   const { statusCode = 500, message } = err;
//   res.status(statusCode).send({ message: statusCode === 500 ? SERVER__ERROR : message });
//   next();
// });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
