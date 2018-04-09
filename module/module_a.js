exports.name = 'ldl';
exports.data = 'this is some data';

var privateVariable = 6;

exports.getPrivate = function(){
	return privateVariable;
};