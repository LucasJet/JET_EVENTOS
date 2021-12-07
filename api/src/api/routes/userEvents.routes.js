const express = require('express');
const multer = require('multer');
const authenticatedUser = require('../middlewares/authenticatedUser');

const router = express.Router();
const UserEventsControllers = require('../controllers/userEventsControllers');

router.get('/', UserEventsControllers.findAll);
router.get('/:id', UserEventsControllers.findById);

router.post('/', authenticatedUser, UserEventsControllers.create);

router.put('/:id', authenticatedUser, UserEventsControllers.edit);

router.delete('/:id', authenticatedUser, UserEventsControllers.remove);

module.exports = router;
