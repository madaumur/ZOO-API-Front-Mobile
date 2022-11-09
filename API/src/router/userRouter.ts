import express, { Request, response, Response } from 'express'
import bcrypt from 'bcryptjs'
import { body, validationResult } from 'express-validator'
import { ValidationError } from 'express-validator/src/base'
import { Result } from 'express-validator/src/validation-result'

const userRouter: express.Router = express.Router()

/*
	@usage :
	@url:
	@methode:
	@fields:
	@access:
*/
userRouter.get('/', (req: Request, res: Response): void => {
	res.status(200).send(
		'<h4 style="font-family: Lato,sans-serif; color:purple">User API</h4>'
	)
})

/*
	@usage : 	register a new user
	@url: 		http://localhost:8080/api/user/register
	@methode: 	POST
	@fields: 	name, email, password
	@access: 	public
*/
userRouter.post(
	// url parameters
	'/register',
	// validation body
	body('name').not().isEmpty().withMessage('Name is required'),
	body('email')
		.normalizeEmail()
		.isEmail()
		.withMessage('Proper email is required'),
	body('password')
		.isLength({ min: 5 })
		.withMessage('Password must be longer than 5 carac'),
	async function (
		req: Request,
		res: Response
	): Promise<express.Response<any, Record<string, any>> | undefined> {
		const errors: Result<ValidationError> = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}

		let { name, email, password } = req.body

		try {
			let salt: string = await bcrypt.genSalt(10)
			let hashedPwd: string = await bcrypt.hash(password, salt)

			res.status(201).json({
				user: { name, email, password },
				hashedPwd: hashedPwd,
			})
		} catch (error) {
			console.error(error)
		}
	}
)

/*
	@usage : 	register a new user
	@url: 		http://localhost:8080/api/user/login
	@methode: 	POST
	@fields: 	name, email, password
	@access: 	public
*/
userRouter.post('/login', (req: Request, res: Response): void => {
	let { email, password } = req.body

	res.status(200).send(
		'<h4 style="font-family: Lato,sans-serif; color:purple">User API</h4>'
	)
})

export default userRouter
