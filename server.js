var http = require('http');
http.createServer(function (req, res) { // http�T�[�o�𗧂Ă�
  console.log("server start");

  fs.readFile('game.html', function(err, data) { // �t�@�C����ǂݍ��݁A�ϐ�data�ɑ��
    if (err) { 
	consle.log("file is not exists");  // �t�@�C����������Ȃ�
    }
    console.log("file read");

    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'}); // ���N�G�X�g�w�b�_ 200 ����ɓǂݍ��߂�
        res.end(data); // �ǂݍ��񂾃t�@�C����\��
    });

}).listen(80);