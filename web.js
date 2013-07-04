var express = require('express');

var app = express.createServer(express.logger());
/*
var data="";
fs = require('fs');

    fs.readFile("index.html", function (err, content) {
        if (err)
		 return  -1
	
	 data=content;
    })

app.get('/', function(request, response) {

var te="Hola";
 // response.send(buffer.toString('utf8', 0, buffer.length));
*/
app.get('/', function(request, response) {

var data="";
fs = require('fs');

    fs.readFile("index.html", function (err, content) {
        if (err)
                 return  -1
        
         data=content;
    })


  response.send(data);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
