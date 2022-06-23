// initializing consts
const express = require("express");
const bodyParser = require("body-parser");

// start express
const app = express();

// sever settings
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// set empty array
var todos = [];

// fetch get routes and EJS
app.get("/", (req, res) => {
    res.render("index", {list: todos});
});

app.post("/", (req, res) => {
    let todo = req.body.newItem;
    todos.push(todo);
    res.redirect("/");
});

// run the server
app.listen(3000, () => {
   console.log("Server running at port 3000");
});