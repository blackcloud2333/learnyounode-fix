var fs = require('fs');
var path = require('path');

module.exports = function (directoryName, extensionName, callback) {


  fs.readdir(directoryName, function (err, list) {

    if (err) {
      return callback(err);
    }

    var fileList = [];

    list.forEach(function (file) {
      var curExt = path.extname(file).substring(1);
      if (curExt == extensionName) {
        fileList.push(file);
      }
    });

    return callback(null, fileList);
  })
}