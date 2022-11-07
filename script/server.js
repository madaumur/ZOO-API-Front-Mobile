"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
class Server {
    constructor(port) {
        this.port = port;
    }
    start() {
        const app = express();
        app.get("/", function (req, res) {
            res.send('Salut les zigotos');
        });
        app.listen(this.port, () => {
            console.log("[server] Server is running at https://localhost:" + this.port);
        });
    }
}
exports.default = Server;
