// Require
let express = require("express");
let mongoose = require("mongoose");

// Connecting To DataBase
mongoose.connect("mongodb://localhost/user3", (err)=>{
    console.log(err ? err : "Connected To Data Base");
});

//  Intanciate App
let app = express();

app.use(express.json());
app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({extended: false}));

//  View Engine

app.set("view engine", "ejs");
app.set("views", __dirname+"/views");

//  MiddleWares

// app.use((req,res,next)=>{
//     console.log(req.url, red.method);
//     next();
// })

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

//  Error Handler

app.use((req,res,next)=>{
    res.send("<h1>Page Not Found: 404</h1>");
    next();
});

app.use((err,req,res,next)=>{
    res.render("error");
});

// Server Listen

app.listen(2223);
