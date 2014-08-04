var test = require('tape');
var path = require('path');
var packageroot = require('../index');
var root = path.resolve(__dirname+'/../');


test('can find package root',function(t){
  packageroot(__dirname,function(err,data){
    t.equals(data,root,'should have correct repo root');
    t.end();
  });
});






