"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const express_validator_1 = require("express-validator");
const userRouter = express_1.default.Router();
userRouter.get('/', (req, res) => {
    res.status(200).send('<h4 style="font-family: Lato,sans-serif; color:purple">User API</h4>');
});
userRouter.post('/register', (0, express_validator_1.body)('name').not().isEmpty().withMessage('Name is required'), (0, express_validator_1.body)('email')
    .normalizeEmail()
    .isEmail()
    .withMessage('Proper email is required'), (0, express_validator_1.body)('password')
    .isLength({ min: 5 })
    .withMessage('Password must be longer than 5 carac'), async function (req, res) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let { name, email, password } = req.body;
    try {
        let salt = await bcryptjs_1.default.genSalt(10);
        let hashedPwd = await bcryptjs_1.default.hash(password, salt);
        res.status(201).json({
            user: { name, email, password },
            hashedPwd: hashedPwd,
        });
    }
    catch (error) {
        console.error(error);
    }
});
userRouter.post('/login', (req, res) => {
    let { email, password } = req.body;
    res.status(200).send('<h4 style="font-family: Lato,sans-serif; color:purple">User API</h4>');
});
exports.default = userRouter;
