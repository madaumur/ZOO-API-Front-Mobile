"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const specie_model_1 = require("../model/specie.model");
const logger_1 = __importDefault(require("../utils/logger"));
const createSpecie = (req, res, next) => {
    const specieData = req.body;
    const specie = new specie_model_1.specieModel({
        ...specieData,
    });
    specie
        .save()
        .then(() => {
        res.status(201).json({ message: 'New specie registered' });
    })
        .catch((error) => {
        res.status(400).json({ error });
    })
        .then(() => logger_1.default.info(`[${req.method}] ${req.originalUrl} | response [${res.statusCode}] ${res.statusMessage}`));
};
const getSpecie = (req, res, next) => {
    specie_model_1.specieModel
        .findById(req.params.id)
        .then((result) => result
        ? res.status(200).json(result)
        : res.status(404).json({ error: 'Specie not found' }))
        .catch((error) => res.status(500).json({ error }))
        .then(() => logger_1.default.info(`[${req.method}] ${req.originalUrl} | response [${res.statusCode}] ${res.statusMessage}`));
};
const getAllSpecies = (req, res, next) => {
    specie_model_1.specieModel
        .find()
        .then((result) => result
        ? res.status(200).json(result)
        : res.status(404).json({ error: 'Species not found' }))
        .catch((error) => res.status(404).json({ error }))
        .then(() => logger_1.default.info(`[${req.method}] ${req.originalUrl} | response [${res.statusCode}] ${res.statusMessage}`));
};
const updateSpecie = (req, res, next) => {
    specie_model_1.specieModel
        .findByIdAndUpdate(req.params.id, req.body)
        .then((result) => result
        ? res.status(202).json(result)
        : res.status(404).json({ error: 'Specie not found' }))
        .catch((error) => res.status(500).json({ error }))
        .then(() => logger_1.default.info(`[${req.method}] ${req.originalUrl} | response [${res.statusCode}] ${res.statusMessage}`));
};
const deleteSpecie = (req, res, next) => {
    specie_model_1.specieModel
        .findByIdAndDelete(req.params.id)
        .then((result) => result
        ? res.status(410).json(result)
        : res.status(404).json({ error: 'Specie not found' }))
        .catch((error) => res.status(500).json({ error }))
        .then(() => logger_1.default.info(`[${req.method}] ${req.originalUrl} | response [${res.statusCode}] ${res.statusMessage}`));
};
exports.default = {
    createSpecie,
    getAllSpecies,
    getSpecie,
    updateSpecie,
    deleteSpecie,
};
