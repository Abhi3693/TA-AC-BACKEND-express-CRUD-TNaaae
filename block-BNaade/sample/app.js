// Require

let express = require("express");
let mongoose = require("mongoose");

// Connected to Data Base
mongoose.connect("mongodb://localhost/sample", (err)=>{
    console.log(err ? err : "Connected To Data Base");
});

// // App Intanciate

let app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public"));

// //  View Set

app.set("view engine", "ejs");
app.set("views", __dirname+"/views");

// //  middleware

app.use("/", require("./routes/index.js"));
app.use("/users", require("./routes/user.js"));

// //  Error handler

app.use((req,res,next)=>{
    res.send("<h1>Page Not Found: 404</h1>");
    next();
});

app.use((err,req,res,next)=>{
    res.send(err);
});

app.listen(4445);