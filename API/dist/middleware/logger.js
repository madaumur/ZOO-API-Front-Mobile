"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../utils/logger"));
function loggerMiddleware(req, res, next) {
    logger_1.default.info(`[REQ] ${req.method} on ${req.originalUrl}`);
    next();
}
exports.default = loggerMiddleware;
