var dowork = function(cb){
	/*var exec = require('child_process').exec, child;
	child = exec('quota -w',
			function(error, stdout, stderr){
				cb(null, 'out');
			}
	);
	child();*/
  cb(null, 'out');
};
exports.dowork = dowork;
