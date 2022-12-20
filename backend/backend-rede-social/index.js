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
const swaggerFile = require('./swagger_output.json');
const swaggerUI = require('swagger-ui-express');
const Auth = require('./middleware/auth');
const cors = require('cors');
const http = require('http');
const pubsub = require('./middleware/pubsub');
const socketio = require("socket.io");
const User = require('./models/User');

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
app.use(pubsub.pub)


//rotas
app.use('/security', authRoute);
app.use('/users', Auth.private, userRoute);
app.use('/profiles', Auth.private, profileRoute);
app.use('/posts', Auth.private, postRoute, commentRoute);
app.use('/feed', Auth.private, feedRoute);



const server = http.Server(app);
const io = socketio(server, {
    cors: {origin: '*'}
})

const liveData = io.of('/');

//live data authentication middleware
liveData.use((socket, next) => {
    //console.log('on use socket')
    if (socket.handshake.auth && socket.handshake.auth.token) {
        //console.log('if')
        jwt.verify(socket.handshake.auth.token, process.env.JWT_SECRET_KEY, function (err, user) {
            // console.log('jwt verify')
            if (err) return next(new Error('Authentication error'))
            // console.log(user)
            User.findById(user._id).populate('description')
                .then(u => {
                    //console.log('sio middleware')
                    if (u) {
                        socket.profile = u.profile
                        next()
                    } else {
                        //console.log('Authentication error 404')
                        next(new Error('Authentication error'))
                    }
                })
        })
    } else {
        // console.error('Authentication error')
        next(new Error('Authentication error'))
    }
})

//socket event - socket.io protocol communication
liveData.on('connection', function (socket) {
    console.warn(`a user connected live ${socket.profile.name}`)

    socket.on('disconnect', () => {
        console.log(socket.connected) //false
    })
    socket.on('error', (err) => {
        console.error(err)
    })
    socket.emit('connect_profile', socket.profile)
})



//rabbimq - message consumption
pubsub.sub().then((sub) => {
    //Consome o rabbit, pega a mensagem e da ok
    sub.on('message', function (message, content, ackOrNack) {
        console.log(JSON.parse(message.content.toString()))
        ackOrNack()
        Object.entries(Object.fromEntries(liveData.sockets))
            .filter(([, v]) => content.keys.includes(v.profile._id.toString()))
            .map(([k, v]) => {
                return v.emit(content.type, content.payload)
            })
    })
}).catch(console.error)


app.listen(port, () => {
    console.log(`[Servidor ON na porta : https://localhost:${port} ] \n -----------------`);
})