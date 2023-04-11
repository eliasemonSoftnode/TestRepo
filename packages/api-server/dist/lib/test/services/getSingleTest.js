"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAllTest_1 = __importDefault(require("./getAllTest"));
const getSingleTest = async (id) => {
    const tests = await (0, getAllTest_1.default)();
    const test = tests.find((item) => item.id === id);
    return test;
};
exports.default = getSingleTest;
