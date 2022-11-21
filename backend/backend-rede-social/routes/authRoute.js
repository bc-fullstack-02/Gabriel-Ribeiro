const router = require('express').Router();
const authRoute = require('../controllers/authController')

//Registrando usuario
router.post("/register", authRoute.register)

//logando
router.post('/login', authRoute.login)

module.exports = router;