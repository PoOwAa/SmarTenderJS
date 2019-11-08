var express = require('express');
var router = express.Router();
const { drinks, drinkOptions } = require('../../drinks');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'SmartBartender', drinks, drinkOptions });
});

module.exports = router;
