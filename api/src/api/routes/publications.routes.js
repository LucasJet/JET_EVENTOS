const express = require('express');
const multer = require('multer');
const authenticatedUser = require('../middlewares/authenticatedUser');

const router = express.Router();
const PublicationsControllers = require('../controllers/publicationsControllers');

router.get('/', PublicationsControllers.getPublication);
router.get('/:id', PublicationsControllers.findById);
router.get('/quantity/getTotalPublications', PublicationsControllers.getTotalPublications);

router.post('/', authenticatedUser, PublicationsControllers.create);

router.put('/:id', authenticatedUser, PublicationsControllers.edit);

router.delete('/:id', authenticatedUser, PublicationsControllers.remove);

module.exports = router;
