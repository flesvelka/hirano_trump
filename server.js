var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) { // httpサーバを立てる

  fs.readFile('game.html', function(err, data) { // ファイルを読み込み、変数dataに代入
    if (err) { 
	consle.log("game.html is not exists");  // ファイルが見つからない
	process.exit(1); // 終了
    }
  fs.readFile('style.css', function(err, css) { // ファイルを読み込み、変数dataに代入
    if (err) { 
	consle.log("style.css is not exists");  // ファイルが見つからない
	process.exit(1); // 終了
    }
    console.log("file read");

    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'}); // リクエストヘッダ 200 正常に読み込めた
    res.end(data); // 読み込んだファイルを表示
  });

}).listen(80); // port80でサーバ待機

console.log("server start");