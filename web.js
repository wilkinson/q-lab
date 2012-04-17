var http, port;

http = require('http');

port = process.env.PORT || 3000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello world!\n');
}).listen(port, '127.0.0.1');

console.log('Server running at http://127.0.0.1:' + port + ' ...');

