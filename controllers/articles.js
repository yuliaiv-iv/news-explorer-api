const Article = require('../models/article');
// const NotFoundError = require('../errors/not-found-error');
const BadRequestError = require('../errors/bad-request-error');
// const ForbiddenError = require('../errors/forbidden-error');

const getArticles = (req, res, next) => {
  const owner = req.user._id;
  Article.find({ owner })
    .then((article) => {
      res.status(200).send(article);
    })
    .catch((err) => next(err));
};

const createArticle = (req, res, next) => {
  const {
    keyword, title, text, date, source, link, image,
  } = req.body;
  const owner = req.user._id;
  Article.create({
    keyword, title, text, date, source, link, image, owner,
  })
    .then((article) => {
      res.status(200).send(article);
      console.log(article);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные'));
      }
      next(err);
    });
};

module.exports = {
  createArticle,
  getArticles,
};
