let express = require("express");

let router = express.Router();
let User = require("../models/usersRoute");

router.get("/", (req,res,next)=>{
    console.log("In user get request");
    User.find({},(err,users)=>{
        if(err) return next(err);
        res.render("users", {users:users});
    })
});

router.get("/new", (req,res,next)=>{
    res.render("addUser");
});

router.post("/", (req,res,next)=>{
    
    User.create(req.body,(err,user)=>{
        if(err) return res.redirect("users/new");
        res.redirect("/users");
    });
});

router.get("/:id", (req,res,next)=>{
    let id = req.params.id;
    User.findById(id, (err, user)=>{
        if(err) next(err);
        res.render("singleUser", {user:user});
    });
});

router.get("/:id/edit", (req,res,next)=>{
    let id = req.params.id;
    User.findById(id, (err, user)=>{
        if(err) next(err);
        res.render("editUser", {user:user});
    });
});

router.post("/:id/edit", (req,res,next)=>{
    let id = req.params.id;
    User.findByIdAndUpdate(id, req.body, {new:true}, (err, user)=>{
        if(err) next(err);
        res.render("singleUser", {user:user});
    });
});

router.get("/:id/delete", (req,res,next)=>{
    let id = req.params.id;
    User.findByIdAndDelete(id, (err, user)=>{
        if(err) next(err);
        res.redirect("/users");
    });
});

module.exports = router;  