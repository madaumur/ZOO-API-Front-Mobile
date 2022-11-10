"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAnimals = exports.findAnimal = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const animal_1 = require("../model/animal");
async function findAnimal(value) {
    try {
        const result = await animal_1.animalModel.findById(value);
        return result;
    }
    catch (e) {
        logger_1.default.error(e);
    }
}
exports.findAnimal = findAnimal;
async function listAnimals() {
    try {
        const animals = await animal_1.animalModel.find();
        return animals;
    }
    catch (e) {
        logger_1.default.error(e);
    }
}
exports.listAnimals = listAnimals;
