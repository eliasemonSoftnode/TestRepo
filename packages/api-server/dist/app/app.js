"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const utils_1 = require("../utils");
// Express Application
const app = (0, express_1.default)();
// Body Parser
app.use(express_1.default.json());
// cors
app.use((0, cors_1.default)());
// Static Serve
app.use(express_1.default.static(path_1.default.join(__dirname, '../../src/public')));
// Init all routes
(0, utils_1.initRoutes)(app);
exports.default = app;
