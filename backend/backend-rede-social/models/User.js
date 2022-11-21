const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        require:true,
        min:3,
        max:30,
        unique:true
    },
    email:{
        type: String,
        required:true,
        max:50,
        unique:true,
    },
    password:{
        type: String,
        required:true,
        min:6
    },
    avatar:{
        type: String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    followers:{
        type: Array,
        default:[]
    },
    following:{
        type: Array,
        default:[]
    },
    isAdmin:{
        type: Boolean,
        default:false
    },
    description:{ //desc
        type:String,
        max:50
    },
    city:{
        type:String,
        max:50
    }
});

module.exports = mongoose.model("User", UserSchema);