var test = require('tape');
var path = require('path');
var packageroot = require('../index');

test('can find package root',function(t){
  var root = path.resolve(__dirname+'/../');
  packageroot(__dirname,function(err,data){
    t.equals(data,root,'should have correct repo root');
    t.end();
  });
});




