var http = require('http');
http.createServer(function (req, res) { // httpサーバを立てる
  console.log("server start");

  fs.readFile('game.html', function(err, data) { // ファイルを読み込み、変数dataに代入
    if (err) { 
	consle.log("file is not exists");  // ファイルが見つからない
    }
    console.log("file read");

    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'}); // リクエストヘッダ 200 正常に読み込めた
        res.end(data); // 読み込んだファイルを表示
    });

}).listen(80);