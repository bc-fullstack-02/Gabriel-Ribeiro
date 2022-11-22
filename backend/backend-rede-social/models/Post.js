const mongoose = require('mongoose')

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
   
   
}, {timestamps:true});

module.exports = mongoose.model("Post", PostSchema);