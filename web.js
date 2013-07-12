var express = require('express');

var app = express.createServer(express.logger());

var http = require('http');
var fs = require('fs'); 

var indexFileBuffer = fs.readFileSync('./index.html');
indexFileBuffer.write(indexFile);
indexFileBuffer.toString();


app.get('/', function(request, response) {
  response.send(indexFile);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
