"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let logger = (req, res, next) => {
    let url = req.originalUrl;
    let method = req.method;
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    let result = `[server_log] [${date}-${time}] ${method} on '${url}'`;
    console.log(result);
    next();
};
exports.default = logger;
