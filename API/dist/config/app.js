"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("../middleware/logger"));
const apiRouter_1 = __importDefault(require("../router/apiRouter"));
const animalRouter_1 = __importDefault(require("../router/animalRouter"));
const userRouter_1 = __importDefault(require("../router/userRouter"));
function createApp() {
    if (!process.env.PORT) {
        throw new Error('Please add the PORT environment variable');
    }
    const PORT = process.env.PORT;
    const HOSTNAME = process.env.HOSTNAME || 'localhost';
    const app = (0, express_1.default)();
    app.use(express_1.default.json({ limit: '50mb' }));
    app.use(logger_1.default);
    app.use('/api', apiRouter_1.default);
    app.use('/api/animal', animalRouter_1.default);
    app.use('/api/user', userRouter_1.default);
    app.listen(PORT, () => {
        console.log('[server] ✅ Express server connected successfully'),
            console.log(`[server] Express server is running at http://${HOSTNAME}:${PORT}`);
    });
    app.get('/', function (req, res) {
        res.send('<h4 style="font-family: Lato,sans-serif; color:green">Welcome to the express server for a Zoo Exercise</h4>');
    });
    return app;
}
exports.default = createApp;
