var fs = require('fs');
var util = require('util');
var dowork = function(cb){
  fs.readFile(process.env.HOME+'git/'+process.env.OPENSHIFT_APP_NAME+'.git/refs/heads/master', {encoding:'utf-8'}, function(err, data){
    if(err){
      cb(err.message);
    }
    else{
      d=data;
      cb(util.format('{ "master": "%s" }"', d.replace('\n', '')));
    }
  });
};
exports.dowork = dowork;
