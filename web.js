var express = require('express');

var app = express.createServer(express.logger());
var data="";
fs = require('fs')
fs.readFile('index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

var buffer = new Buffer(data, "utf-8")
app.get('/', function(request, response) {

  response.send(buffer.toString('utf8', 0, buffer.length));

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
