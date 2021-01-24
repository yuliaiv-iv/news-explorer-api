const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { createUser, loginUser } = require('../controllers/users');
const userRouter = require('./users.js');
const articleRouter = require('./articles');
const auth = require('../middlewares/auth');

router.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().trim(),
    password: Joi.string().required().min(8),
    name: Joi.string().required().min(2).max(30),
  }),
}), createUser);

router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().trim(),
    password: Joi.string().required().min(8),
  }),
}), loginUser);

router.use(auth);

router.use('/', userRouter, articleRouter);

module.exports = router;
