const router = require('express').Router();
const { createUser, loginUser } = require('../controllers/users');
const userRouter = require('./users.js');

router.post('/signup', createUser);
router.post('/signin', loginUser);

router.use('/', userRouter);

module.exports = router;
