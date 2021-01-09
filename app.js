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

const { END_PORT, URL } = require('./utils/config');

const app = express();

mongoose.connect(URL, {
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
app.use(notFoundError);
app.use(errorHandler);

app.listen(END_PORT, () => {
  console.log(`App listening on port ${END_PORT}`);
});
