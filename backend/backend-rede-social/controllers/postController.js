const router = require('express').Router();
const Post = require('../models/Post');
const { post } = require('../routes/usersRoute');


// criar um post
const createPost = async(req,res) => {
   
    try {
    
        const newPost = await Post.create(req.body);
        res.status(200).json(newPost)

    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message)
    }
}

// listar posts
const listPost = async(req,res) =>{
    try {
        const list = await Post.find();
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

        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("Post deletar com sucesso");
        } else {
            res.status(403).json("você só pode deletar o seu próprio post");
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}



module.exports = {createPost, listPost, updatePost, deletePost} 