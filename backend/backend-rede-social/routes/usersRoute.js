const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')
const userController = require('../controllers/userController')

router.get('/me', userController.listUsers);
router.put('/:id', userController.updateUser);
router.delete('/:id',userController.deleteUser);

module.exports = router;