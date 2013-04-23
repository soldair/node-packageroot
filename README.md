
[![Build Status](https://secure.travis-ci.org/soldair/node-packageroot.png)](http://travis-ci.org/soldair/node-packageroot)

packageroot
===========

return the closest parent or current directory that contains a package.json


example
=======

```js
var packageroot = require('packageroot');

packageroot('./',function(err,root){
  console.log(root);
  // if im in /root/package/test it would print 
  // /root/package 
});


```



