"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const demo_1 = __importDefault(require("./demo"));
const test_1 = __importDefault(require("./test"));
const routes = [
    {
        route: demo_1.default,
    },
    {
        route: test_1.default,
    },
];
exports.default = routes;
