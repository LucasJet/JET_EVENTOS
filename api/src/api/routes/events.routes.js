const express = require('express');
const multer = require('multer');
const uploadConfig = require('../config/multer');
const authenticatedUser = require('../middlewares/authenticatedUser');

const router = express.Router();
const upload = multer(uploadConfig);
const EventsControllers = require('../controllers/eventsControllers');

router.get('/', EventsControllers.getEvent);
router.get('/:id', EventsControllers.findById);
router.get('/hours/eventHours', EventsControllers.calculateEventHours);

router.post('/', authenticatedUser, EventsControllers.create);

router.put('/:id', authenticatedUser, EventsControllers.edit);

router.put('/:id/image', authenticatedUser, upload.single('image'), EventsControllers.createImage);

router.delete('/:id', authenticatedUser, EventsControllers.remove);

module.exports = router;
