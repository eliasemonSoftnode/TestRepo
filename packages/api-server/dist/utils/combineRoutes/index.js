'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var combineRoutes = function (app, routes, version) {
  routes.forEach(function (route) {
    app.use('/api/'.concat(version), route.route);
  });
};
exports.default = combineRoutes;
//# sourceMappingURL=index.js.map
