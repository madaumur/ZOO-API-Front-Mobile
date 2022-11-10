"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requireAnimal = (req, res, next) => {
    const animal = res.locals.animal;
    if (animal) {
        return res.sendStatus(403);
    }
    return next();
};
exports.default = requireAnimal;
