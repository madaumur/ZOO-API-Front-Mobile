"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const animal_controller_1 = __importDefault(require("../controller/animal.controller"));
const logger_1 = __importDefault(require("../middleware/logger"));
const animalRouter = express_1.default.Router();
animalRouter.post('/api/animals/new', logger_1.default, animal_controller_1.default.createAnimal);
animalRouter.get('/api/animals/', logger_1.default, animal_controller_1.default.getAllAnimals);
animalRouter.get('/api/animals/:id', logger_1.default, animal_controller_1.default.getAnimal);
animalRouter.put('/api/animals/:id', logger_1.default, animal_controller_1.default.updateAnimal);
animalRouter.delete('/api/animals/:id', logger_1.default, animal_controller_1.default.deleteAnimal);
exports.default = animalRouter;
