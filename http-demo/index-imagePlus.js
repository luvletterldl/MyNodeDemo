require('http').createServer(function(rep, res) {
	res.writeHead(200, {'Content-Type':'image/png'});
	require('fs').createReadStream('pig.png').pipe(res);
}).listen(9527);