//- JavaScript source code

//- server.js ~~
//                                                      ~~ (c) SRW, 25 Jul 2012

(function () {
    'use strict';

 // Pragmas

    /*jslint indent: 4, maxlen: 80, node: true */

 // Declarations

    var fs, hostname, http, port, url;

 // Definitions

    fs = require('fs');

    hostname = '0.0.0.0';

    http = require('http');

    port = (process.env.PORT !== undefined) ? process.env.PORT : 5000;

    url = require('url');

 // Invocations

    http.createServer(function (request, response) {
     // This function needs documentation.
        var path = 'src' + url.parse(request.url).pathname;
        fs.createReadStream(path).pipe(response);
        //response.writeHead(200, {'Content-Type': 'text/plain'});
        //response.end('Welcome to the lab :-)\n');
        return;
    }).listen(port, hostname);

 // That's all, folks!

    return;

}());

//- vim:set syntax=javascript: