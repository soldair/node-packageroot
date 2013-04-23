var fs = require('fs');
var parents = require('parents');
var path = require('path');

module.exports = function(dir,cb){
  try{
    var dirs = parents(dir);
  } catch(e){
    return process.nextTick(function(){
      cb(e);
    });
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
}
