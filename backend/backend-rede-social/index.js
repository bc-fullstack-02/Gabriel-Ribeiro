const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const userRoute = require('./routes/usersRoute');
const postRoute = require('./routes/postRoute');
const feedRoute = require('./routes/feedRoute');
const commentRoute = require('./routes/commentRoute');
const profileRoute = require('./routes/profileRoute');
const authRoute = require('./routes/authRoute');
const swaggerFile = require('./swagger_output.json')
const swaggerUI = require('swagger-ui-express');
const Auth = require('./middleware/auth')
const cors = require('cors');

//swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true}, (err)=>{
    if(err) console.log(err) 
   else console.log("mongdb is connected");
  
})

//middlewares
app.use(express.json())
app.use(helmet());
app.use(morgan('common'));
app.use(cors());
app.options('*', cors());

//rotas
app.use('/security', authRoute);
app.use('/users', Auth.private, userRoute);
app.use('/profiles', Auth.private, profileRoute);
app.use('/posts', Auth.private, postRoute, commentRoute);
app.use('/feed', Auth.private, feedRoute);






app.listen(port, () => {
    console.log(`[Servidor ON na porta : https://localhost:${port} ] \n -----------------`);
})