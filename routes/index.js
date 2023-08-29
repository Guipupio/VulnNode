const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const userInput = req.query.userInput;
  res.render('index', { title: 'Vulnerable Node Application!🤗' , userInput: userInput});

});

module.exports = router;
