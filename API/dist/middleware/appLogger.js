"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let appLogger = (req, res, next) => {
    let url = req.url;
    let method = req.method;
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    let result = `[server_log] [${date}-${time}] ${method} on '${url}'`;
    console.log(result);
    next();
};
exports.default = appLogger;
