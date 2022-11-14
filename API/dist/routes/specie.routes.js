"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const specie_controller_1 = __importDefault(require("../controller/specie.controller"));
const logger_1 = __importDefault(require("../middleware/logger"));
const specieRouter = express_1.default.Router();
specieRouter.get('/api/species/', logger_1.default, specie_controller_1.default.getAllSpecies);
specieRouter.get('/api/species/:id', logger_1.default, specie_controller_1.default.getSpecie);
exports.default = specieRouter;
