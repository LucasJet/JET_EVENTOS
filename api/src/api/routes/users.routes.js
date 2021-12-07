const express = require('express');

const router = express.Router();
const UsersControllers = require('../controllers/usersController');
const authenticatedUser = require('../middlewares/authenticatedUser');

router.get('/', UsersControllers.findAll);

router.post('/', authenticatedUser,UsersControllers.create);
router.post('/admin', authenticatedUser, UsersControllers.createAdmin);

module.exports = router;
