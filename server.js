//- JavaScript source code

//- server.js ~~
//                                                      ~~ (c) SRW, 25 Jul 2012

(function () {
    'use strict';

 // Pragmas

    /*jslint indent: 4, maxlen: 80, node: true, nomen: true */

 // Declarations

    var fs, host, http, mime_types, port, public_html, url;

 // Definitions

    fs = require('fs');

    host = (process.env.IP !== undefined) ? process.env.IP : '0.0.0.0';

    http = require('http');

    mime_types = {
        css:    'text/css',
        html:   'text/html',
        js:     'text/javascript',
        json:   'application/json',
        txt:    'text/plain'
    };

    port = (process.env.PORT !== undefined) ? process.env.PORT : 5000;

    public_html = __dirname + '/public_html';

    url = require('url');

 // Invocations

    (function () {

        var server;

        server = http.createServer(function (request, response) {
         // This function needs documentation.
            var path = url.parse(request.url).pathname;
            if (path === '/') {
                path = '/index.html';
            }
            fs.readFile(public_html + path, function (err, data) {
             // This function needs documentation.
                if (err) {
                    response.writeHead(404, {'Content-Type': 'text/plain'});
                    response.write('"' + path + '" not found.');
                    response.end();
                    return;
                }
                var extension, re;
                re = /\.([a-z]+)$/;
                extension = (re.test(path)) ? re.exec(path)[1] : 'txt';
                if (mime_types.hasOwnProperty(extension) === false) {
                    extension = 'txt';
                }
                response.writeHead(200, {
                    'Content-Type': mime_types[extension]
                });
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
