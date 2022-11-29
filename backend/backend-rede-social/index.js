const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const userRoute = require('./routes/usersRoute');
const postRoute = require('./routes/postRoute');
const commentRoute = require('./routes/commentRoute');
const authRoute = require('./routes/authRoute');
const swaggerFile = require('./swagger_output.json')
const swaggerUI = require('swagger-ui-express');
const Auth = require('./middleware/auth')

//swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true}, ()=>{
    console.log("MongoDB conectado");
})

//middlewares
app.use(express.json())
app.use(helmet());
app.use(morgan('common'));

//rotas
app.use('/auth', authRoute);
app.use('/users', Auth.private, userRoute);
app.use('/posts', Auth.private, postRoute, commentRoute)

app.get('/', (req,res) => {
    res.send("HOME PAGE")
})














app.listen(port, () => {
    console.log(`Servidor ON na porta : https://localhost:${port}`);
})