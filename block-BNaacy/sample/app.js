// Require
let express = require("express");
let mongoose = require("mongoose");

//  Instanciate App
let app = express();

//  MiddleWare
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));

//  Route MiddleWare

app.set("view engine", "ejs");
app.set("views", __dirname+"/views");

app.use("/", require("./routes/index"));
app.use("/user", require("./routes/user"));

//  Error 

app.use("/", (req,res,next)=>{
    res.send("<h1>Page Not Found: 404</h1>");
    next();
});

app.use((err,req,res,next)=>{
    res.send(err);
    next();
});

app.listen(7777);