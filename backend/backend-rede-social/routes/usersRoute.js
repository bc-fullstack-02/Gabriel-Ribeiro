const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const userController = require('../controllers/userController')

router.get('/me', userController.listUsers);
router.put('/me', userController.updateUser);
router.delete('/me',userController.deleteUser);

module.exports = router;