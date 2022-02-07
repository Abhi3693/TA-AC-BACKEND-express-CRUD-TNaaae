let express = require("express");
let router = express.Router();
let mongoose = require('mongoose');
let User = require("../models/userData");

mongoose.connect("mongodb://localhost/userDiary", (err)=>{
    console.log(err ? err : "Connected to userDiary Data Base");
});

router.get("/new", (req,res)=>{
    res.render("form");
});

router.get("/", (req,res)=>{
    let id = req.params.id;
    User.find({}, (err, users) => {
        if (err) return next(err);
        res.render('allUser', { user: users });
    });
});

router.post("/", (req,res, next)=>{
    User.create(req.body, (err,user)=>{
        if(err) return next(err),
        console.log(user);
        res.render('user', {user: user});
    })
});

router.get("/:id", (req,res)=>{
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if (err) return next(err);
        res.render('user', { user: user });
    });
});

router.put("/:id", (req,res)=>{
    let id = req.params.id;
    User.findByIdAndUpdate(id, req.body, {new: true}, (err, user) => {
        if (err) return next(err);
        res.render('user', { user: user });
    });
});

router.delete("/:id", (req,res)=>{
    let id = req.params.id;
    User.findByIdAndDelete(id, (err, user) => {
        if (err) return next(err);
        res.send(`${user.name} was deleted`);
    });
});
module.exports = router;





// router.get('/new', (req, res, next) => {
//   res.render('form');
// });

// router.get('/', (req, res, next) => {
//   Student.find({}, (err, users) => {
//     if (err) return next(err);
//     res.render('studentAll', { user: users });
//   });
// });

// router.post('/', (req, res, next) => {
//   Student.create(req.body, (err, user) => {
//     if (err) return next(err);
//     console.log(user);
//     res.render('user', { user: user });
//   });
// });

// router.get('/:id', (req, res, next) => {
//   let id = req.params.id;
//   Student.findById(id, (err, user) => {
//     if (err) return next(err);
//     res.render('user', { user: user });
//   });
// });

