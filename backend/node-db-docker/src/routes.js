const router = require('express').Router();
const postController = require("./controller/postController");

router.get("/", postController.findPosts);
router.get("/:id", postController.findById);
router.post("/", postController.createPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

module.exports  = router;