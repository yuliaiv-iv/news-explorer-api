const Article = require('../models/article');
const NotFoundError = require('../errors/not-found-error');
const BadRequestError = require('../errors/bad-request-error');
const ForbiddenError = require('../errors/forbidden-error');
const { NOT_FOUND_ERROR } = require('../utils/errors');
const { BADREQ_ERROR } = require('../utils/errors');
const { FORBIDDEN_ERROR } = require('../utils/errors');

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
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  } = req.body;
  Article.create({
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    owner: req.user._id,
  })
    .then((data) => {
      const articleData = data.toObject();
      const { owner, ...article } = articleData;
      res.status(200).send(article);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(BADREQ_ERROR));
      } else {
        next(err);
      }
    });
};

const deleteArticle = (req, res, next) => {
  const owner = req.user._id;
  Article.findById(req.params.id).select('+owner')
    .then((article) => {
      if (!article) {
        throw new NotFoundError(NOT_FOUND_ERROR);
      } else if (article.owner.toString() !== owner) {
        throw new ForbiddenError(FORBIDDEN_ERROR);
      }
      Article.findByIdAndRemove(req.params.id)
        .then((removedArticle) => res.status(200).send(removedArticle));
    })
    .catch((err) => next(err));
};

module.exports = {
  createArticle,
  getArticles,
  deleteArticle,
};
