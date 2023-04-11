"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const config_1 = __importDefault(require("config"));
const app_1 = __importDefault(require("./app/app"));
dotenv_1.default.config();
const server = http_1.default.createServer(app_1.default);
const PORT = config_1.default.get('port') || 4000;
server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
exports.default = {
    server,
};
