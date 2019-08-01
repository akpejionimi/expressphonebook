require('dotenv').config();

const express = require ('express');
const bodyParser = require("body-parser"); 
const path = require("path");

const addRoute = require ("./routes/add");
const homeRoute = require ("./routes/home");

const app = express();
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(addRoute.router);
app.use(homeRoute);


app.use((req, res, next) => {
    res.status(404).send("<h1>Not Found</h1>")
});
//Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`listening at port 3000 ${PORT}`));