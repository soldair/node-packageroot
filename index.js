var fs = require('fs');
var parents = require('parents');
var path = require('path');

module.exports = function(dir,cb){

  fs.realpath(dir,function(err,dir){
    if(err) return cb(err);
    try{
      var dirs = parents(dir);
    } catch(e){
      cb(e);
    }

    (function fn(){
      if(!dirs.length) cb(new Error('could not find package.json at or above '+dir));

      var d = dirs.shift();
      var p = path.join(d,'package.json');
      fs.exists(p,function(exists){
        if(exists) {
          cb(false,d);
        } else {
          fn();
        }
      });

    })();
  });
}

module.exports.sync = function(dir){
  dir = fs.realpathSync(dir);
  var dirs = parents(dir);
  console.log(dirs);
  for(var i=0;i<dirs.length;++i){
    if(fs.existsSync(path.join(dirs[i],'package.json'))){
      return dirs[i];
    }
  }
}

