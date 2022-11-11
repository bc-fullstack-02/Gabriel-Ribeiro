const express = require("express");
const app = express();
const Routes = require('./routes')
const db = require("./model/pg");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

try {
  db.sync();
  db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.get("/",  (req, res) => {
  res.send("Bem vindo à homepage");
});
app.use('/posts', Routes);


app.listen(3000, () => {
  console.log("SERVER ON");
});
