const router = require('express').Router();
const postController = require('../controllers/postController')

router.get('/', postController.listPost)

module.exports = router;