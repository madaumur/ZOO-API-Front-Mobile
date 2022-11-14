"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const animal_model_1 = require("../model/animal.model");
const logger_1 = __importDefault(require("../utils/logger"));
const createAnimal = (req, res, next) => {
    const animalData = req.body;
    const animal = new animal_model_1.animalModel({
        ...animalData,
    });
    animal
        .save()
        .then(() => {
        res.status(201).json({ message: 'New animal registered' });
    })
        .catch((error) => {
        res.status(400).json({ error });
    })
        .then(() => logger_1.default.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`));
};
const getAnimal = (req, res, next) => {
    animal_model_1.animalModel
        .findById(req.params.id)
        .then((result) => result
        ? res.status(200).json(result)
        : res.status(404).json({ error: 'Animal not found' }))
        .catch((error) => res.status(500).json({ error }))
        .then(() => logger_1.default.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`));
};
const getAllAnimals = (req, res, next) => {
    animal_model_1.animalModel
        .find()
        .then((result) => result
        ? res.status(200).json(result)
        : res.status(404).json({ error: 'Animals not found' }))
        .catch((error) => res.status(404).json({ error }))
        .then(() => logger_1.default.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`));
};
const updateAnimal = (req, res, next) => {
    animal_model_1.animalModel
        .findByIdAndUpdate(req.params.id, req.body)
        .then((result) => result
        ? res.status(202).json(result)
        : res.status(404).json({ error: 'Animal not found' }))
        .catch((error) => res.status(500).json({ error }))
        .then(() => logger_1.default.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`));
};
const deleteAnimal = (req, res, next) => {
    animal_model_1.animalModel
        .findByIdAndDelete(req.params.id)
        .then((result) => result
        ? res.status(410).json(result)
        : res.status(404).json({ error: 'Animal not found' }))
        .catch((error) => res.status(500).json({ error }))
        .then(() => logger_1.default.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`));
};
exports.default = {
    createAnimal,
    getAllAnimals,
    getAnimal,
    updateAnimal,
    deleteAnimal,
};
