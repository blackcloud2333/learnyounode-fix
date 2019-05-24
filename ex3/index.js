var mymodule = require('./learnyounode-fix/ex3/myModule.js/index.js');

mymodule('./', 'txt', function (err, data) {
  if (err) {
    console.log(err);
  }
  data.forEach(function (file) {
    console.log(file);
  })
});