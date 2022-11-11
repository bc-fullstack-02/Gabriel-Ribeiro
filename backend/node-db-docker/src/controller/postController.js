const router = require('express').Router();
const Post = require('../model/posts')


const findPosts = async(req, res) => {
    find = await Post.findAll();
    res.json(find);
}

const findById = async (req, res) => {
    const findPost = await Post.findByPk(req.params.id)
    
    if (findPost) res.send(findPost);
    else res.send("Não existe registro")
    res.status(404).end();
  };

const createPost = async (req, res) => {
    try {
      const newPost = await Post.create({ title: req.body.title, body: req.body.body, name: req.body.name });
    } catch (error) {
      console.log("Houve erro ao tentar criar um registro");
    }
      res.status(201).end();
  }

const updatePost = async (req, res) => {
    try {
     const updatePost = await Post.update({  title: req.body.title, body: req.body.body, name: req.body.name }, {
       where: {id: req.params.id}
     });
   
       res.send("Post Alterado");
    } catch (error) {
       res.send(error)
    }
   }

const deletePost = async (req, res) => {
    try {
      const deletePost = await Post.destroy({
        where: { id: req.params.id },
      });
  
      res.send("Post deletado");
    } catch (error) {
      res.send(error);
    }
  }

module.exports = {findPosts, findById, createPost, updatePost, deletePost}