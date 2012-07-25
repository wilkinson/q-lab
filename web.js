//- JavaScript source code

//- web.js ~~
//                                                      ~~ (c) SRW, 25 Jul 2012

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function (request, response) {
    response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Listening on " + port);
});

//- vim:set syntax=javascript: