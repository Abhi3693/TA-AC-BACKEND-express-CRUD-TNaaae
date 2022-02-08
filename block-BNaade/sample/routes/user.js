let express = require("express");

let router = express.Router();
let User = require("../models/usersRoute");

router.get("/", (req,res,next)=>{
    User.find({},(err,users)=>{
        if(err) return res.redirect("users");
        res.render("users", {users:users});
    })
});

router.get("/new", (req,res,next)=>{
    res.render("addUser");
});

router.post("/", (req,res,next)=>{
    User.create(req.body,(err,user)=>{
        if(err) return res.redirect("users/new");
        res.redirect("users");
    });
});

router.get("/:id", (req,res,next)=>{
    let id = req.params.id;
    User.findById(id, (err, user)=>{
        if(err) res.redirect("users");
        res.render("singleUser", {user:user});
    });
});

router.get("/:id/edit", (req,res,next)=>{
    let id = req.params.id;
    User.findById(id, (err, user)=>{
        if(err) res.redirect("users");
        res.render("editUser", {user:user});
    });
});

router.post("/:id/edit", (req,res,next)=>{
    let id = req.params.id;
    User.findByIdAndUpdate(id, req.body, {new:true}, (err, user)=>{
        if(err) res.redirect("users");
        res.render("singleUser", {user:user});
    })
})

module.exports = router; 