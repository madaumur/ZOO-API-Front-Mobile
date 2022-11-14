"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specieModel = void 0;
const mongoose_1 = require("mongoose");
const specieSchema = new mongoose_1.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    sociable: { type: String, required: false },
    dangerous: { type: String, required: false },
    observations: { type: String, required: false },
});
const specieModel = (0, mongoose_1.model)('specie', specieSchema);
exports.specieModel = specieModel;
