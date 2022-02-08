let express = require("express");
let User = require("../models/userModel");

let router = express.Router();

router.get("/", (req,res,next)=>{
    User.find({}, (err, users)=>{
        if(err) return next(err);
        res.render("users", {users:users});
    });
});

router.get("/new", (req,res,next)=>{
    res.render("addUser");

});

router.post("/", (req,res,next)=>{
    User.create(req.body, (err,user)=>{
        if(err) return next(err);
        res.render("singleUser", {user:user});
    });
});

router.get("/:id", (req,res,next)=>{
    let id = req.params.id;

    User.findById(id, (err, user)=>{
        if(err) return next(err);
        res.render("singleUser", {user:user});
    });
});

router.get("/:id/edit", (req,res,next)=>{
    let id = req.params.id;
    User.findById(id, (err, user)=>{
        if(err) return next(err);
        res.render("editUser", {user:user});
    });
});

router.post("/:id/edit", (req,res,next)=>{
    let id = req.params.id;
    User.findByIdAndUpdate(id, req.body, {new:true}, (err, user)=>{
        if(err) return next(err);
        res.render("singleUser", {user:user});
    });
});

router.get("/:id/delete", (req,res,next)=>{
    let id = req.params.id;
    User.findByIdAndDelete(id, (err, user)=>{
        if(err) return next(err);
        res.redirect("/users");
    });
});

module.exports = router;
