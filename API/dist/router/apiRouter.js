"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiRouter = express_1.default.Router();
apiRouter.get('/', (req, res) => {
    res.status(200).send('<h2 style="font-family: Lato,sans-serif; color:green">Welcome to the API for a Zoo Exercise</h2>');
});
apiRouter.get('/version', (req, res) => {
    res.status(200).send('<h2 style="font-family: Lato,sans-serif; color:red">APIversion : 0.0.1</h2>');
});
exports.default = apiRouter;
