const router = require('express').Router();
const { createUser, loginUser } = require('../controllers/users');
const userRouter = require('./users.js');
const articleRouter = require('./articles');
const auth = require('../middlewares/auth');

router.post('/signup', createUser);
router.post('/signin', loginUser);

router.use(auth);

router.use('/', userRouter, articleRouter);

module.exports = router;
