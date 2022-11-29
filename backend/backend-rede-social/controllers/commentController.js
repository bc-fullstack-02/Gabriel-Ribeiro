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


const listComments = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId).populate({path:'comments', select:'description'});

    res.json(post.comments);
  } catch (error) {
    res.json(error.message);
  }
};

const listOneComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    
    if(comment.postId == req.params.postId){
      res.json(comment);
    }else {
      res.status(500).json("Houve algum erro na pesquisa, tente novamente.")
    }
 
  } catch (error) {
    res.json(error.message);
  }
};

const updateComment = async (req,res) => {
  try {
      const comment = await Comment.findById(req.params.id);
     
      if(req.params.postId == req.body.postId && comment.postId == req.params.postId ){
          if(comment.userId == req.body.userId){
            await comment.updateOne({$set:req.body});
            res.status(200).json("Comentário atualizado com sucesso.");
          } else {
              res.status(403).json("você só pode atualizar o seu próprio comentário.");
          }
      } else {
          res.status(403).json("Confira se os dados estão inseridos corretamente.")
      }

     
  } catch (error) {
      res.status(500).json(error.message)
  }
}

const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    if (comment.postId == req.params.postId) {
      comment.delete();
      res.status(200).json("Comentário deletado com sucesso.")
    } else {
      res.status(403).json("Confira se os dados estão inseridos corretamente.");
    }
  } catch (error) {
    res.status(403).json(error.message);
  }
};

const likeComment = async (req,res) =>{
  try {
      const comment = await Comment.findById(req.params.id);
      if(!comment.likes.includes(req.body.userId)){
          await comment.updateOne({$push: {likes:req.body.userId}})
          res.status(200).json("Você deu like no comentário!")
      }else{
          await comment.updateOne({$pull: {likes:req.body.userId}});
          res.status(200).json("Você retirou o like nesse comentário.")
      }

  } catch (error) {
      res.status(500).json(error.message)
  }
}

module.exports = { createComment, listComments, listOneComment, updateComment, deleteComment, likeComment};
