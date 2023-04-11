"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAllTest_1 = __importDefault(require("../services/getAllTest"));
const controller = async (_req, res) => {
    const allTests = await (0, getAllTest_1.default)();
    res.send({
        message: 'Test Controller is working!',
        data: allTests,
    });
};
exports.default = controller;
