var qs = require('querystring');
require('http').createServer(function(req, res) {
	if('/' == req.url){
		res.writeHead(200,{'Content-Type':'text/html','charest':'utf8'});
		res.end([
			'<form method="POST" action="/yourlover">',
			'<h1>ldl for lbl</h1>',
			'<fieldset>',
			'<lable>This is an old legend about love.</label>',
			'<p>Write down what you want to say:</p>',
			'<input type="text" name="name">',
			'<p><button>Get your lover</button></p>',
			'</form>'
			].join(''));
	} else if ('/yourlover' == req.url && 'POST' == req.method) {
		var body = '';
		req.on('data',function(chunk) {
			body += chunk;
		});
		req.on('end',function() {
			res.writeHead(200,{'Content-Type':'text/html'});
			var name = qs.parse(body).name;
			var first = name.substr(0,8);
			var second = name.substr(8,8);
			var third = name.substr(16,8);
			var four = name.substr(24,8);
			// if(third == '玲'){
			// 	lover == 'her';
			// }else {
			// 	lover == 'him';
			// }
			var two = '&nbsp;'+'&nbsp;';
			var fou = '&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;';
			var six = two+fou;
			res.write(first+first+first+first+fou+fou+second+second+second+second+fou+fou+third+two+four+'<br>'+
				first+six+six+six+six+fou+second+fou+two+third+fou+two+four+'</br>'+
				first+first+first+first+fou+fou+second+second+second+second+fou+third+six+fou+four+'<br>'+
				fou+fou+two+first+fou+fou+second+six+six+fou+third+six+four+'</br>'+
				first+first+first+first+fou+fou+second+second+second+second+fou+fou+third+two+four
				 );
			res.end('<p>'+'Congratulations on your true love.Please cherish her'+'!</p>');
		});
	} else {
		res.writeHead(404);
		res.end('Not Found');
	}
}).listen(5200);