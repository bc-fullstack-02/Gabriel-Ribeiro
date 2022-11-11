const {Router} = require('express')

const routes = new Router();

routes.get('/health',(req,res) => {
    res.send({message:"Connected with success"});
})

module.exports = routes;