var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) { // http�T�[�o�𗧂Ă�

  fs.readFile('game.html', function(err, data) { // �t�@�C����ǂݍ��݁A�ϐ�data�ɑ��
    if (err) { 
	consle.log("game.html is not exists");  // �t�@�C����������Ȃ�
	process.exit(1); // �I��
    }
  fs.readFile('style.css', function(err, css) { // �t�@�C����ǂݍ��݁A�ϐ�data�ɑ��
    if (err) { 
	consle.log("style.css is not exists");  // �t�@�C����������Ȃ�
	process.exit(1); // �I��
    }
    console.log("file read");

    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'}); // ���N�G�X�g�w�b�_ 200 ����ɓǂݍ��߂�
    res.end(data); // �ǂݍ��񂾃t�@�C����\��
  });

}).listen(80); // port80�ŃT�[�o�ҋ@

console.log("server start");