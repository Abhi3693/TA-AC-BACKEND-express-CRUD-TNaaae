let express = require("express");
let mongoose = require("mongoose");
let User = require("../models/userRoute");

mongoose.connect("mongodb://localhost/sample", (err)=>{
    console.log(err ? err : "Connected to Data Base");
});

let router = express.Router();

router.get("/form", (req,res,next)=>{
    res.render("form");
    next();
});

router.post("/", (req,res,next)=>{
    User.create(req.body, (err, user)=>{
        if(err) return next(err);
        res.render("index");
    });
});



module.exports = router;