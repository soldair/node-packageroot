var test = require('tape');
var path = require('path');
var packageroot = require('../index');
var root = path.resolve(__dirname+'/../');



test('can find package root sync',function(t){

  var data = packageroot.sync(__dirname);
  t.equals(data,root,'should have correct repo root sync');
  t.end();

});
