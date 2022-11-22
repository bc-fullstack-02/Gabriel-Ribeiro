const JWT = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const private = async (req, res, next) => {
    let success = false;

    if(req.headers.authorization){
        //Bearer
        const [authType, token] = req.headers.authorization.split(' ');

        if(authType === 'Bearer'){
            try {
                JWT.verify(token, process.env.JWT_SECRET_KEY );
                success = true; 
            } catch (error) {console.log(error.message);}
        }
    }
    if(success){
        next();
    }else{
        res.status(403).json({error:"Não autorizado"})
    }
}

module.exports = {private}