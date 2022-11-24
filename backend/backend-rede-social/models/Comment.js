const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        minLength: 2
      },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      postId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Post'
      }
      
      /* ,
      likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }] */


  },  {timestamps:true})
  
module.exports = mongoose.model('Comment', CommentSchema) 