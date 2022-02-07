let express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Welcome to home page');
});

router.get('/about', (req, res, next) => {
  res.send('This is about page');
});

module.exports = router;
