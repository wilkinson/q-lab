//- JavaScript source code

//- web.js ~~
//                                                      ~~ (c) SRW, 25 Jul 2012

(function () {
    'use strict';

 // Pragmas

    /*jslint indent: 4, maxlen: 80, node: true */

 // Declarations

    var http, port;

 // Definitions

    http = require('http');

    port = process.env.hasOwnProperty('PORT') ? process.env.PORT : 5000;

 // Invocations

    http.createServer(function (request, response) {
     // This function needs documentation.
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Welcome to the lab :-)\n');
        return;
    }).listen(port);

 // That's all, folks!

    return;

}());

//- vim:set syntax=javascript: