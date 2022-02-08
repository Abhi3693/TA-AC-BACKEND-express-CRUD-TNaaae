// Requires

let express = require("express");
let mongoose = require("mongoose");

//  Connect to Data Base

mongoose.connect("mongodb://localhost/user2", (err)=>{
    console.log(err ? err : "Connected to Data Base");
});

//  Instanciate app
let app = express();

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: false}));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// MiddleWares

app.use((req,res,next)=>{
    console.log(req.method, req.url);
    next();
});

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/user"));

//  Error Handler

app.use((req,res,next)=>{
    res.send("<h1>Page Not Found: 404</h1>");
});

app.use((err,req,res,next)=>{
    res.send(err);
});

//  Server Listener

app.listen(3334);
