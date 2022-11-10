"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const animal_service_1 = require("../service/animal.service");
const animalRouter = express_1.default.Router();
animalRouter.get('/', (req, res) => {
    res.status(200).send('<h4 style="font-family: Lato,sans-serif; color:purple">Animal API access</h4>');
});
animalRouter.get('/animals', async (req, res) => {
    try {
        const animals = await (0, animal_service_1.listAnimals)();
        return res.status(200).json(animals);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Sorry, something went wrong :/' });
    }
});
animalRouter.post('/new', (req, res) => {
    let data = req.body;
    res.status(201).json({
        msg: 'New animal received',
        data: data,
    });
});
animalRouter.get('/test', (req, res) => {
    res.status(200).send('<h4 style="font-family: Lato,sans-serif; color:red">Production test</h4>');
});
exports.default = animalRouter;
