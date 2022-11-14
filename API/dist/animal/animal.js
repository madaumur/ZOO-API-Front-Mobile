"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animalInterface = exports.animalModel = void 0;
const mongoose_1 = require("mongoose");
const animal_interface_1 = require("../interface/animal.interface");
Object.defineProperty(exports, "animalInterface", { enumerable: true, get: function () { return animal_interface_1.animalInterface; } });
const animalSchema = new mongoose_1.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    specie: { type: mongoose_1.Schema.Types.ObjectId, ref: 'specie' },
    birth_date: { type: Date, required: false },
    death_date: { type: Date, required: false },
    sex: { type: String, required: true },
    observations: { type: String, required: false },
    position: { type: String, required: true },
});
const animalModel = (0, mongoose_1.model)('animal', animalSchema);
exports.animalModel = animalModel;
