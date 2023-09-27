// В терминала инсталираме
//1. npm init -y ,
// 2. npm i express ,
// 3. npm i nodemon -D ,
// 4. npm i express-handlebars ,
// 5. Накрая пишем npm start за да стартираме сървъра

const express = require("express");
const app = express();
const handlebarse = require("express-handlebars");
const PORT = 1080;
const path = require("path");

// Handlebarse configuration
app.engine("hbs", handlebarse.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

// setup static files да зареди css fails и да се дебъгва 
const staticFiles = express.static(path.resolve(__dirname, "public"));
app.use(staticFiles);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
