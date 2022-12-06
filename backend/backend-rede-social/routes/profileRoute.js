const router = require('express').Router();
const userController = require('../controllers/userController')


router.get('/', userController.listUsers);
router.get('/:username', userController.listUser);
router.put('/:id/follow', userController.followUser);


module.exports = router;