const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')
const postController = require('../controllers/postController')


router.get('/', postController.listPost)
router.post('/', postController.createPost)
router.put('/:id', postController.updatePost)
router.delete('/:id', postController.deletePost)
router.put('/:id/like', postController.likePost)
router.get('/:id', postController.listOnePost)



module.exports = router;