const Post = require("../models/Post");
const Comment = require("../models/Comment");
const User = require("../models/User");

const createComment = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    const post = await Post.findById(req.body.postId );

    const comment = await Comment.create({
      description: req.body.description,
      userId: user._id,
      postId: post._id
    });
    // const autor = await Person.findById('637d49afb8827d7f5549d052').updateOne({$push:{stories:story1}})  //.author.stories.push(story1);
    const commentPost = await post.updateOne({$push:{comments:comment}})

   
    res.json(comment);
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = { createComment };
