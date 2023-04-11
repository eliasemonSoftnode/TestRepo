'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = require('express');
var router = (0, express_1.Router)();
router.get('/demo', function (req, res) {
  res.send({
    data: 'Here is your data',
  });
});
router.post('/demo', function (req, res) {
  res.send({
    data: 'demo created!',
  });
});
router.delete('/demo', function (req, res) {
  res.send({
    data: 'demo deleted!',
  });
});
exports.default = router;
//# sourceMappingURL=demo.route.js.map
