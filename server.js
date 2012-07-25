//- JavaScript source code

//- server.js ~~
//                                                      ~~ (c) SRW, 25 Jul 2012

(function () {
    'use strict';

 // Pragmas

    /*jslint indent: 4, maxlen: 80, node: true */

 // Declarations

    var fs, host, http, port, url;

 // Definitions

    fs = require('fs');

    host = (process.env.IP !== undefined) ? process.env.IP : '0.0.0.0';

    http = require('http');

    port = (process.env.PORT !== undefined) ? process.env.PORT : 5000;

    url = require('url');

 // Invocations

    (function () {

        var server;

        server = http.createServer(function (request, response) {
         // This function needs documentation.
            var path = url.parse(request.url).pathname;
            fs.readFile(__dirname + '/src' + path, function (err, data) {
             // This function needs documentation.
                if (err) {
                    response.writeHead(404, {'Content-Type': 'text/plain'});
                    response.write('"' + path + '" not found.');
                    response.end();
                    return;
                }
                response.writeHead(200, {'Content-Type': 'text/plain'});
                response.end(data);
                return;
            });
            return;
        });

        server.on('error', function (err) {
         // This function needs documentation.
            console.error('Error:', err);
            return;
        });

        server.listen(port, host);

        return;

    }());

 // That's all, folks!

    return;

}());

//- vim:set syntax=javascript: