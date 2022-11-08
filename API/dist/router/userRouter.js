"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
userRouter.get('/', (req, res) => {
    res.status(200).send('<h4 style="font-family: Lato,sans-serif; color:purple">User API</h4>');
});
exports.default = userRouter;
