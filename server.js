var http = require('http')
  , sprintf = require('sprintf').sprintf;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(sprintf('%s', 'Hello Node Ninja\n'));
}).listen(80);