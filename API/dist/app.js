"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const connect_1 = __importDefault(require("./utils/connect"));
const logger_1 = __importDefault(require("./utils/logger"));
const routes_1 = __importDefault(require("./routes"));
const port = config_1.default.get('port');
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: '50mb' }));
app.use(routes_1.default);
app.listen(port, async () => {
    logger_1.default.info(`✅ Express Server launched successfully`);
    logger_1.default.info(`Express Server is running at http://localhost:${port}`);
    await (0, connect_1.default)();
});
