"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animalModel = void 0;
const mongoose_1 = require("mongoose");
const animalSchema = new mongoose_1.Schema({
    _id: {
        type: String,
    },
    name: {
        type: String,
    },
    specie: {
        type: String,
    },
    birth_date: {
        type: String,
    },
    death_date: {
        type: String,
    },
    sex: {
        type: String,
    },
    observations: {
        type: String,
    },
    position: {
        type: String,
    },
});
const animalModel = (0, mongoose_1.model)('animal', animalSchema);
exports.animalModel = animalModel;
