const express = require('express');
const users = require('./users.routes');
const login = require('./login.routes');
const events = require('./events.routes');
const publications = require('./publications.routes');
const userEvents = require('./userEvents.routes');

const router = express.Router();

router.use('/users', users);
router.use('/login', login);
router.use('/events', events);
router.use('/publications', publications);
router.use('/userEvents', userEvents);

module.exports = router;
