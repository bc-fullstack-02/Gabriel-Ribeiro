const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')
const userController = require('../controllers/userController')


//listar usuarios
router.get('/', userController.listUsers);

//update
router.put('/:id', userController.updateUser);

//delete
router.delete('/:id',userController.deleteUser);

//Listar 1 usuário
router.get('/:username', userController.listUser);

// seguir usuário
router.put('/:id/follow', userController.followUser);

//unfollow usuario
router.put('/:id/unfollow', userController.unfollowUser);



module.exports = router;