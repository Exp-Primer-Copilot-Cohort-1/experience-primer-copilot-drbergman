// Create web server
var express = require('express');
var app = express();
var comments = [];

app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  comments.push(req.body);
  res.json(comments);
});

app.listen(3000);
console.log('Server running at http://