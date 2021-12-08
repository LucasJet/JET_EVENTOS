const express = require('express');
const { required } = require('joi');

const router = express.Router();
const UsersControllers = require('../controllers/usersController');
const authenticatedUser = require('../middlewares/authenticatedUser');

router.get('/', UsersControllers.findAll);
router.get('/GetAllByRole/:role', UsersControllers.getAllByRole);
router.get('/getAllStudentsBySeason', UsersControllers.getAllStudentsBySeason);
router.get('/dashboard/getDashboard', UsersControllers.getDashboard);

router.put('/:id', authenticatedUser, UsersControllers.edit);

router.post('/', authenticatedUser,UsersControllers.create);
router.post('/admin', authenticatedUser, UsersControllers.createAdmin);

module.exports = router;
