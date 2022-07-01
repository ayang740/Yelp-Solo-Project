const express = require('express');
const asyncHandler = require('express-async-handler');
const { PizzeriaPlace, Review } = require('../../db/models');

const router = express.Router();

router.get('/:pizzeriaId', asyncHandler(async (req, res) => {
    const reviews = await Review.findAll({
        where: { pizzeriaId: req.params.pizzeriaId }
    });
    return res.json(reviews)
}));

router.post('/add', asyncHandler(async function (req, res) {
    const review = await Review.create(req.body);
    return res.json(review)
})
);

router.delete('/:reviewId', asyncHandler(async (req, res) => {
    const review = await Review.findByPk(req.params.reviewId);
    await review.destroy()
    return res.json(req.params.reviewId)
}));

module.exports = router;

