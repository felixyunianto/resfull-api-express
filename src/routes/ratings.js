const express = require('express');
const ratingRouter = express.Router();
const ratingController = require('../controllers/ratings');

ratingRouter.post("/", ratingController.postRating);

module.exports = ratingRouter;