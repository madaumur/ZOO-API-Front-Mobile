"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const mongoose_1 = require("mongoose");
if (!process.env.MONGO_URL) {
    throw new Error('Please add the MONGO_URL environment variable');
}
async function connectDb() {
    try {
        await (0, mongoose_1.connect)(process.env.MONGO_URL);
        console.log('[mongoDB] ✅ Database connected successfully');
    }
    catch (error) {
        console.log('[mongoDB] ❌ Database connection error' + error);
        process.exit(1);
    }
}
exports.default = connectDb;
