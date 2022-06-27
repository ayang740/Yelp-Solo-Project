const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const pizzeriasRouter = require('./pizzerias.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/pizzerias', pizzeriasRouter)



module.exports = router;