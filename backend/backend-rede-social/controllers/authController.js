const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')

const register = async (req,res) => {
  
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt);
        const user = await new User({
            username: req.body.username,
            email:req.body.email,
            password: hashPass
        });

        await user.save(); 

        res.status(201).send(user)
    } catch (error) {
        res.send(error.message)
    }
  
}

const login = async (req,res) => {
    
    try {
        const loginUser  = req.body.username
        const user = await User.findOne({username:loginUser});

        if(!user){
           return res.status(404).json("Usuario não encontrado");
        }
        const validPass = await bcrypt.compare(req.body.password, user.password);
       
        if(!validPass){
            return res.status(400).send("Senha inválida");
        }

        const token = JWT.sign(
          { username: req.body.username, password: req.body.password, profile: user._id },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "2h" }
        );
        res.status(200).send({token})
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}

module.exports = {login, register}