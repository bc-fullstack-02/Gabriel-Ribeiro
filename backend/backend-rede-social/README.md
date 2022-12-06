# 👩‍👦SOCIAL NETWORK - BACKEND

## 💻 Sobre o projeto
 Esse projeto faz parte do programa de trainee da SYSMAP e trata-se de uma rede social feita em Node.js
 
## 🧰 Tecnologias utilizadas

* Javascript
* Express.js
* Node.js
* DotEnv
* Helmet
* Bcrypt
* MongoDB com a ODM Mongoose
* Swagger API
* JWT (JSON Web Token) Authentication
* Docker
* Mini IO


## 🛣 Documentação SWAGGER
  Para acessar  a documentação SWAGGER e fazer os testes de requisições, use a seguinte rota :
###  ```GET /api-docs```

<br>

## 👩‍💻Instalação
 ### ```npm  install ```
 ### Rode o projeto com o script : ``` npm start```
 ### Criar um arquivo na pasta raiz do projeto chamado ".env" e inserir as seguintes propriedades no arquivo:
 <br>

 ```
  MONGO_URI = {sua uri}
  JWT_SECRET_KEY = {sua secret key}
  MINIO_ENDPOINT= {endpoint do minio}
  MINIO_ACCESS_KEY= {seu username do minio}
  MINIO_SECRET_KEY= {sua senha do minio}
  MINIO_BUCKET_NAME = {nome do seu bucket}
```
 
 
 ## 🐋Docker
Caso você queira rodar a aplicação diretamente do docker insira o código abaixo:


<!---
```
docker run -p 3000:3000 -e "MONGO_URI={inserir aqui uri}" -e JWT_SECRET_KEY={inserir aqui chave} gahbr/vuttr
```
-->
## 🦸 Autor

<a href="https://github.com/Gahbr">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/80289718?v=4" width="100px;" alt="Gabriel Ribeiro"/>
 <br />
 <sub><b>Gabriel Ribeiro</b></sub></a> <a href="https://github.com/Gahbr" title="github"></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Gabriel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriellribeiro1/)](https://www.linkedin.com/in/gabriellribeiro1/)
[![Yahoo!](https://img.shields.io/badge/Yahoo!-6001D2?style=flat-square&logo=Yahoo!&logoColor=white)](mailto:gabriell.ribeiro@yahoo.com)
[![GitHub](https://img.shields.io/badge/Gahbr-%23121011.svg?style=flat-square&logo=github&logoColor=white)](https://github.com/Gahbr)
