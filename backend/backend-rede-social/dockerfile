FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

#COPIA TUDO PRO WORKDIR
COPY . . 

#ESPECIFICAR EM QUAL PORTA RODAR
EXPOSE 3000

CMD [ "node", "index.js" ]