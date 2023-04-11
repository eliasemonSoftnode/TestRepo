'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var fs = require('fs');
var path = require('path');
var watchDirectory = function (dirPath, callback) {
  fs.readdir(dirPath, function (error, files) {
    if (error) {
      console.error(
        'Error reading directory '.concat(dirPath, ': ').concat(error),
      );
      return;
    }
    var _loop_1 = function (file) {
      var filePath = path.join(dirPath, file);
      fs.stat(filePath, function (error, stats) {
        if (error) {
          console.error(
            'Error getting file stats for '
              .concat(filePath, ': ')
              .concat(error),
          );
          return;
        }
        if (stats.isDirectory()) {
          watchDirectory(filePath, callback);
        } else {
          fs.watch(filePath, function (eventType, filename) {
            callback(filePath, eventType);
          });
        }
      });
    };
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
      var file = files_1[_i];
      _loop_1(file);
    }
  });
};
exports.default = watchDirectory;
//# sourceMappingURL=index.js.map
