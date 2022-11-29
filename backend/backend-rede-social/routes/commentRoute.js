const router = require('express').Router();
const commentController = require('../controllers/commentController')

//comentarios
router.get('/:postId/comments', commentController.listComments)
router.get('/:postId/comments/:id', commentController.listOneComment)
router.post('/:id/comments', commentController.createComment)
router.put('/:postId/comments/:id', commentController.updateComment)
router.delete('/:postId/comments/:id', commentController.deleteComment)
router.post('/:postId/comments/:id/like', commentController.likeComment)


module.exports = router;