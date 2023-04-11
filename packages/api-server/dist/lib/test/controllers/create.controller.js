"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createTest_1 = __importDefault(require("../services/createTest"));
const controller = async (req, res) => {
    if (!req.body.data) {
        return res.send({
            message: 'Invalid Input',
            data: [],
        });
    }
    const data = await (0, createTest_1.default)(req.body.data);
    res.send({
        message: 'Test Controller is created!',
        data,
    });
};
exports.default = controller;
