const router = require('express').Router();
const postController = require('../controllers/postController')
const upload = require('../middleware/uploadFile')

router.get('/', postController.listPost)
router.post('/',upload.single('image'), postController.createPost)
router.put('/:id', postController.updatePost)
router.delete('/:id', postController.deletePost)
router.put('/:id/like', postController.likePost)
router.get('/:id', postController.listOnePost)

module.exports = router;