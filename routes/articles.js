const router = require('express').Router();

const {
  createArticle,
  getArticles,
} = require('../controllers/articles');

router.get('/articles', getArticles);

router.post('/articles', createArticle);

// router.delete('/cards/:id', deleteArticle);

module.exports = router;
