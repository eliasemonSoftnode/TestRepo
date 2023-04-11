"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const test_controller_1 = __importDefault(require("../../../../lib/test/controllers/test.controller"));
const create_controller_1 = __importDefault(require("../../../../lib/test/controllers/create.controller"));
const delete_controller_1 = __importDefault(require("../../../../lib/test/controllers/delete.controller"));
const router = (0, express_1.Router)();
router.get('/test', test_controller_1.default);
router.post('/test', create_controller_1.default);
router.delete('/test', delete_controller_1.default);
router.put('/test', (_req, res) => {
    res.send({
        message: 'Put route is working',
    });
});
exports.default = router;
