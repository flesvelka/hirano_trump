// http���W���[���̓ǂݍ���
var http = require('http');

// http�T�[�o�[�̋N��
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(80);

console.log('Server running');