const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt')


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
        const mail  = req.body.email
        const user = await User.findOne({email:mail});

        !user && res.status(404).json("Usuario não encontrado");
        const validPass = await bcrypt.compare(req.body.password, user.password);
        !validPass && res.status(400).send("Senha inválida");

        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}

module.exports = {login, register}