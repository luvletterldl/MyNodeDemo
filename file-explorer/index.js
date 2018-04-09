var fs = require('fs'),stdin = process.stdin,stdout = process.stdout;// require fs module, 提供同步和异步API的模块

// console.log(fs.readdirSync(__dirname));//同步版本

// function asyncGF(err,files) {
// 	console.log(files);
// };
// fs.readdir('.',asyncGF);
fs.readdir(process.cwd(), function(err, files){
	console.log('');

	if (!files.length) {
		return console.log('  \033[31m No files to show!\033[39m\n');
	}

	console.log('  Select which file or directory you want to see\n');

	function file(i){
		var filename =files[i];

		fs.stat(__dirname + '/' + filename, function(err, stat){
			if (stat.isDirectory()) {
				console.log('  '+i+' \033[36m' + filename + '/\033[39m');
			} else {
				console.log('  '+i+' \033[90m' + filename + '\033[39m');
			}

			if (++i == files.length) {
				// read();
				console.log('');
				stdout.write('  \033[33mEnter your choice: \033[39m');
				stdin.resume();
			} else {
				file(i);
			}
		});
	}
	file(0);
});