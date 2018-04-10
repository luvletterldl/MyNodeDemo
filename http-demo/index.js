var http = require('http');
http.createServer(function (req, res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('Hello <b>World</b>');
	setTimeout(function(){
		res.write("lalala");
	},666);
}).listen(3000);
