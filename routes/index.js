const express = require('express');
const sanitizerXss = require("xss");

const router = express.Router();


router.get('/', function(req, res, next) {

  const sanitizedUserInput = sanitizerXss(req.query.userInput);

  res.render(
    'index',
    {
      title: 'Vulnerable Node Application!',
      userInput: sanitizedUserInput
    }
  );

});

module.exports = router;
