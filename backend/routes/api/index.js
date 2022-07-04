const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const pizzeriasRouter = require('./pizzerias.js')
const reviewsRouter = require('./reviews.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/pizzerias', pizzeriasRouter)

router.use('/reviews', reviewsRouter)



module.exports = router;