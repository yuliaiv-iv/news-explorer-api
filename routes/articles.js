const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  createArticle,
  getArticles,
  deleteArticle,
} = require('../controllers/articles');

router.get('/articles', getArticles);

router.post('/articles', celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().required(),
    title: Joi.string().required(),
    text: Joi.string().required(),
    date: Joi.string().required(),
    source: Joi.string().required(),
    link: Joi.string().required().pattern(/^(http|https):\/\/[^ "]+$/),
    image: Joi.string().required().pattern(/^(http|https):\/\/[^ "]+$/),
  }),
}), createArticle);

router.delete('/articles/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().length(24),
  }),
}), deleteArticle);

module.exports = router;
