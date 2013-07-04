var express = require('express');

var app = express.createServer(express.logger());
var data="";
fs = require('fs');

    fs.readFile("./index.html", function (err, content) {
        if (err)
		 return  -1
	else
	console.log("Ok" + content);
	data=content;
    })

var buffer = new Buffer(data, "utf-8");
app.get('/', function(request, response) {


len = buffer.write('\u00bd + \u00bc = \u00be', 0);
console.log(len + " bytes: " + buffer.toString('utf8', 0, len));

  response.send(buffer.toString('utf8', 0, buffer.length));
 // response.send('Hello World!!!!');

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
