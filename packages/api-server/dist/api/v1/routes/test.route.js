'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = require('express');
var router = (0, express_1.Router)();
router.get('/test', function (req, res) {
  res.send({
    data: 'Here is your data',
  });
});
router.post('/test', function (req, res) {
  res.send({
    data: 'test created!',
  });
});
router.delete('/test', function (req, res) {
  res.send({
    data: 'test deleted!',
  });
});
exports.default = router;
//# sourceMappingURL=test.route.js.map
