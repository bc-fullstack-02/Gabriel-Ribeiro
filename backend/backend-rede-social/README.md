# 🦜Parrot - BACKEND

## 💻 Sobre o projeto
 Esse projeto faz parte do Programa Trainee SysMap de Excelência Full Stack | 2ª edição e trata-se do back-end de uma rede social feita em Node.js
 
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
* RabbitMQ
* Rascal

<br>

## ⚙ Requisitos
 Para poder rodar este projeto, você deverá ter os seguintes programas instalados:
 - Node.js
 - Docker
 - npm
  
  <br>

## 👩‍💻Instalação

  * Clone este projeto
  * Entre na pasta raiz de <i>"backend-rede-social"</i> e abra o arquivo <a href="https://github.com/bc-fullstack-02/Gabriel-Ribeiro/blob/main/backend/backend-rede-social/docker-compose.yaml">docker-compose.yaml</a>
  * Altere a  variável  <b>MINIO_ENDPOINT </b> inserindo o seu endereço IPV4
  
  ![Screenshot 2023-01-05 131239](https://user-images.githubusercontent.com/80289718/210827577-52305682-ba59-4da0-bf9b-dda08fe42a3c.jpg)

  * Após isso, insira no terminal o comando abaixo:

```
docker-compose up
```

 <br>

## 🛣 Documentação SWAGGER
  Para acessar  a documentação SWAGGER e fazer os testes de requisições, use a seguinte rota :
###  ```GET /api-docs```
![Screenshot 2023-01-05 at 13-09-23 Swagger UI](https://user-images.githubusercontent.com/80289718/210826910-32266c6f-31f9-4526-b50c-80db6a800022.png)

 
</br>

###  ```localhost:3000/api-docs```

<br>

 ## 🔢Variáveis de  ambiente

 ```
  MONGO_URI = {sua uri}
  JWT_SECRET_KEY = {sua secret key para gerar o JWT}
  MINIO_ENDPOINT= {seu endereço IPV4}
  MINIO_ROOT_USER= {seu username do minio}
  MINIO_ROOT_PASSWORD= {sua senha do minio}
 
```
 
<!--  
 ## ✅Checklist de implementações futuras 
   - Automatizar a troca de policy do bucket gerado para um público
   - socket.io com rabbitMQ -->


## 🦸 Autor

<a href="https://github.com/Gahbr">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/80289718?v=4" width="100px;" alt="Gabriel Ribeiro"/>
 <br />
 <sub><b>Gabriel Ribeiro</b></sub></a> <a href="https://github.com/Gahbr" title="github"></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Gabriel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriellribeiro1/)](https://www.linkedin.com/in/gabriellribeiro1/)
[![Yahoo!](https://img.shields.io/badge/Yahoo!-6001D2?style=flat-square&logo=Yahoo!&logoColor=white)](mailto:gabriell.ribeiro@yahoo.com)
[![GitHub](https://img.shields.io/badge/Gahbr-%23121011.svg?style=flat-square&logo=github&logoColor=white)](https://github.com/Gahbr)
