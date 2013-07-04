var express = require('express');

var app = express.createServer(express.logger());

var data="";
fs = require('fs');

    fs.readFile("index.html", function (err, content) {
        if (err)
		 return  -1
	
	 data=content;
    })

app.get('/', function(request, response) {

var buffer = new Buffer(data, "utf-8")


 response.send(buffer.toString('utf8', 0, buffer.length));

//  response.send(data);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
