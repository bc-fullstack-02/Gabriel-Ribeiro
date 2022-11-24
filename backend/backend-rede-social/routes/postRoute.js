const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')
const postController = require('../controllers/postController')
const commentController = require('../controllers/commentController')


router.get('/', postController.listPost)
router.post('/', postController.createPost)
router.put('/:id', postController.updatePost)
router.delete('/:id', postController.deletePost)
router.put('/:id/like', postController.likePost)
router.get('/:id', postController.listOnePost)

//comentarios
router.post('/:id/comment', commentController.createComment)


module.exports = router;