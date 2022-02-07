let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Student = require('../models/studentModel');

mongoose.connect('mongodb://localhost/sample', (err) => {
  console.log(err ? err : 'Connected to Data Base');
});

router.get('/new', (req, res, next) => {
  res.render('form');
});

router.get('/', (req, res, next) => {
  Student.find({}, (err, users) => {
    if (err) return next(err);
    res.render('studentAll', { user: users });
  });
});

router.post('/', (req, res, next) => {
  Student.create(req.body, (err, user) => {
    if (err) return next(err);
    console.log(user);
    res.render('user', { user: user });
  });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  Student.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('user', { user: user });
  });
});

module.exports = router;
