"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animalModel = void 0;
const mongoose_1 = require("mongoose");
const animalSchema = new mongoose_1.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    specie: new mongoose_1.Schema({
        _id: { type: String, required: true },
        name: { type: String, required: true },
    }),
    birth_date: { type: Date, required: false },
    death_date: { type: Date, required: false },
    sex: { type: String, required: true },
    observations: { type: String, required: false },
    position: { type: String, required: true },
});
const animalModel = (0, mongoose_1.model)('animal', animalSchema);
exports.animalModel = animalModel;
