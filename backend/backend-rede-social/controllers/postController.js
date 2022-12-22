const router = require('express').Router();
const Post = require('../models/Post');
const { post } = require('../routes/usersRoute');
const Minio = require('../middleware/minio');
const User = require('../models/User');

const createPost =  async(req, res) => {
    try {
        Minio.minioClient.fPutObject(Minio.bucketName, req.file.filename, req.file.path, async (error, etag)=> {
            if(error) {
                return console.log(error);
            }
            const imageName = req.file.filename;
            const followers = await User.findById(req.body.userId).followers
            const newPost = await Post.create(req.body).then(args => req.publish('post', followers, args))
         
            const newPostId = newPost._id;
            const publicUrl = Minio.minioClient.protocol + '//' + Minio.minioClient.host + ':' + Minio.minioClient.port + '/' + Minio.bucketName + '/' + imageName
            const post = await Post.findById(newPostId).updateOne({image:publicUrl});
            
            //atualizando campo profile
            const profile = await User.findById(req.body.userId)
            const profileName = profile.username;
            const postProfile = await Post.findById(newPostId).updateOne({profile:profileName});
            
            
            res.status(200).json(await Post.findById(newPostId))
        });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json(error.message);
    }
  };

// listar posts -- timeline
const listPost = async(req,res) =>{
    try {
        const list = await Post.find().populate({path:'comments', select:['description', 'profile']});
        res.status(200).json(list)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// editar um post
const updatePost = async (req,res) => {
    try {
        const post = await Post.findById(req.params.id);

        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("Post atualizado com sucesso");
        } else {
            res.status(403).json("você só pode atualizar o seu próprio post");
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// deletar um post
const deletePost = async (req,res) =>{
    try {
        const post = await Post.findById(req.params.id);

        if(post.userId == req.body.userId){
            await post.deleteOne();
            res.status(200).json("Post deletado com sucesso");
        } else {
            res.status(403).json("você só pode deletar o seu próprio post");
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

//like e unlike no post
const likePost = async (req,res) =>{
    try {
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes:req.body.userId}})
            res.status(200).json("Você deu like no post!")
        }else{
            await post.updateOne({$pull: {likes:req.body.userId}});
            res.status(200).json("Você retirou o like nesse post.")
        }

    } catch (error) {
        res.status(500).json(error.message)
    }
}

const listOnePost = async (req,res) =>{
    try {
        const post = await Post.findById(req.params.id).populate({path:'comments', select:['description', 'profile']});
        res.status(200).json(post)

    } catch (error) {
        res.status(500).json(error.message)
    }
}
module.exports = {createPost, listPost, updatePost, deletePost, likePost, listOnePost} 