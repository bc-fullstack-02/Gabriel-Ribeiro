const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = [['./routes/authRoute.js'],['./routes/usersRoute.js'], ['./routes/postRoute.js']];



const doc = {
    info: {
        version: "1.0.0",
        title: "Rede social",
        description: "Documentação do sistema de rede social da Sysmap."
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Autenticação",
        },
        {
            "name": "User",
        },
        {
            "name": "Post",
        }
    ],
    securityDefinitions: {
        bearer: {
            type: "apiKey",
            name: "Authorization",
            in: "header",
            description:"Insira o token JWT com o Bearer. Por exemplo: `Bearer: abcde12345 `."
        }
    },
    definitions: {
        User: {
            name: "John Doe",
            age: 69,
            parents: {
                father: "Aleister Doe",
                mother: "Crowley Doe"
            }
           
        },
        Post: {
            $userId: "6377b80915940791ed630f14",
            likes: ["637bc43908ea42f21abdb91a"],
            description:"Esse é um post interessante"
        }
    }
}


swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index.js')
})