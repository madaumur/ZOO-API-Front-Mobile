"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specieInterface = exports.specieModel = void 0;
const mongoose_1 = require("mongoose");
const specie_interface_1 = require("./specie.interface");
Object.defineProperty(exports, "specieInterface", { enumerable: true, get: function () { return specie_interface_1.specieInterface; } });
const specieSchema = new mongoose_1.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    sociable: { type: String, required: false },
    dangerous: { type: String, required: false },
    observations: { type: String, required: false },
});
const specieModel = (0, mongoose_1.model)('specie', specieSchema);
exports.specieModel = specieModel;
