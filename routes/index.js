var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

var Schema = mongoose.Schema
var steakhouseSchema = new Schema({
  id: Number,
  name: String
})

var Steakhouses = mongoose.model('steakhouses', steakhouseSchema)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
