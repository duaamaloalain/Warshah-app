var express = require('express')
var mongoose = require('mongoose');
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(2220, function () {
  console.log('Example app listening on port 2220!')
})

var mongoURI = process.env.MONGODB_URI ||'mongodb://localhost/WarshahDB';
mongoose.connect(mongoURI);
db = mongoose.connection;

db.once('open',function () {
	console.log('mongoDB is open');
});