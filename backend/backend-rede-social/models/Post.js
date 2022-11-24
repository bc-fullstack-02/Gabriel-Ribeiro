const mongoose = require('mongoose');
const Comment = require('./Comment');


const PostSchema = new mongoose.Schema({
    userId:{
        type: String,
        require:true,
    },
    likes:{
        type: Array,
        default: []
    },
    image:{
        type: String,
    },
    description:{ 
        type:String,
        max:500
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
   }]
   
}, {timestamps:true});



  
module.exports = mongoose.model("Post", PostSchema);