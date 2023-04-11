"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combineRoutes = (app, routes, version) => {
    routes.forEach((route) => {
        app.use(`/api/${version}`, route.route);
    });
};
exports.default = combineRoutes;
