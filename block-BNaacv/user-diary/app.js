// Requires
let express = require("express");
let mongoose = require('mongoose');

//  Intanceate app
let app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public"));

// view MiddleWares

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


//  Routing middlewares

app.use("/user", require('./routes/user'));

//  Error middleWares

app.use((req,res,next)=>{
    res.send("<h1>Page not found: 404</h1>");
});

app.use((err,req,res,next)=>{
    res.send(err);
});

// Server Port

app.listen(3334);

