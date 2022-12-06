
const User = require('../models/User')
const bcrypt = require('bcrypt')

const listUsers =  async (req,res) => {
    const user = await User.find({}, '-password');
    res.send(user);
}

const listUser = async (req,res) => {
    try {
        const user = await User.find({username:req.params.username},'-password')

        if (user.length > 0){
            res.status(200).json(user)
        } else {
            res.json("Não existe esse usuário")
        }
       
    } catch (error) {
        res.status(500).send("Não foi possível achar usuário")
    }
}

const updateUser = async (req,res) => {
    const user = await User.findById(req.params.id);
    if(req.body.id == req.params.id ){
        
        if(req.body.password){
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password,salt)

            } catch (error) {
                return res.status(500).json(error.message)
            }
        }

        try {
            const user = await User.findByIdAndUpdate(req.params.id, {$set:req.body})
            res.status(200).json("Usuario atualizado")
        } catch (error) {
            console.log(error.message);
            res.status(404).json("erro ao atualizar usuário")
        }

    }else{
        return res.status(403).json("Você só pode atualizar sua conta")
    }
}

const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (req.body.id == req.params.id) {
    try {
      if (user) {
        user.delete();
        res.status(200).json("Usuario deletado");
      } else {
        res.json("Confira se o usuário está certo e tente novamente.");
      }
    } catch (error) {
      res.json(error.message);
    }
  } else {
    return res.status(500).json("Você só pode deletar a sua conta");
  }
};

const followUser = async (req,res) => {
    if(req.body.id !== req.params.id){

        try {
            const followedUser = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.id)

            if(!followedUser.followers.includes(req.body.id)){
                await followedUser.updateOne({$push:{followers:req.body.id}})
                await currentUser.updateOne({$push:{following:req.params.id}})

                res.status(200).json("Usuário seguido com sucesso")
            }else{
                await followedUser.updateOne({$pull:{followers:req.body.id}})
                await currentUser.updateOne({$pull:{following:req.params.id}})
                res.status(403).json("Você deixou de seguir essa pessoa.")
            }
        } catch (error) {
            res.status(500).json(error.message)
        }
    }else{
        res.status(403).json("Você não pode seguir a si mesmo")
    }
}

module.exports = {listUsers, listUser, updateUser, deleteUser, followUser}