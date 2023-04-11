"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/demo', (_req, res) => {
    res.send({
        data: 'Here is your data',
    });
});
router.post('/demo', (_req, res) => {
    res.send({
        data: 'demo created!',
    });
});
router.delete('/demo', (_req, res) => {
    res.send({
        data: 'demo deleted!',
    });
});
exports.default = router;
