"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiRouter_1 = __importDefault(require("./router/apiRouter"));
const animalRouter_1 = __importDefault(require("./router/animalRouter"));
const userRouter_1 = __importDefault(require("./router/userRouter"));
const appLogger_1 = __importDefault(require("./middleware/appLogger"));
const app = (0, express_1.default)();
const hostname = '127.0.0.1';
const port = 8080;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(appLogger_1.default);
app.use('/api', apiRouter_1.default);
app.use('/api/animal', animalRouter_1.default);
app.use('/api/user', userRouter_1.default);
app.get('/', function (req, res) {
    res.send('<h4 style="font-family: Lato,sans-serif; color:green">Welcome to the express server for a Zoo Exercise</h4>');
});
app.listen(port, () => {
    console.log(`[server] Express server is running at http://${hostname}:${port}`);
});
