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
const Minio = require('./middleware/minio')
const upload = require('./middleware/uploadFile')

//swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))
//Criando um bucket no Minio 
Minio.createBucket();

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true}, ()=>{
    console.log("MongoDB conectado");
})

//middlewares
app.use(express.json())
app.use(helmet());
app.use(morgan('common'));

//rotas
app.use('/security', authRoute);
app.use('/users', Auth.private, userRoute);
app.use('/profiles', Auth.private, profileRoute);
app.use('/posts', Auth.private, postRoute, commentRoute);
app.use('/feed', Auth.private, feedRoute);


/* app.get('/', (req,res) => {
    res.send("<h1>SYSMAP PARROT</h1>")
}) */


//upar imagem para o minio
app.post("/uploadfile", upload.single('upfile'), (req, res) => {
 
    console.log(req.file);
    
      Minio.minioClient.fPutObject(Minio.bucketName, req.file.filename, req.file.path, function(error, etag) {
        if(error) {
            return console.log(error);
        }
        res.send(req.file);
    });
    
  });




app.listen(port, () => {
    console.log(`[Servidor ON na porta : https://localhost:${port} ] \n -----------------`);
})