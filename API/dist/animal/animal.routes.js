"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const animal_service_1 = require("../service/animal.service");
const logger_1 = __importDefault(require("../utils/logger"));
const animalRouter = express_1.default.Router();
animalRouter.get('/api/animals/info', (req, res) => {
    res.status(200).send('Welcome on animals API');
});
animalRouter.get('/api/animals', async (req, res) => {
    logger_1.default.info(req.headers + req.url);
    const animals = await (0, animal_service_1.listAnimals)();
    return res.status(200).json(animals);
});
animalRouter.get('/api/animals/:id', async (req, res) => {
    const animal = await (0, animal_service_1.findAnimal)(req.params.id);
    return res.status(200).json(animal);
});
exports.default = animalRouter;
