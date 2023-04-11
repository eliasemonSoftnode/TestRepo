"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deleteTest_1 = __importDefault(require("../services/deleteTest"));
const controller = async (req, res) => {
    await (0, deleteTest_1.default)(req.body.id);
    res.send({
        message: `Test Controller ${req.body.id} is deleted!`,
    });
};
exports.default = controller;
