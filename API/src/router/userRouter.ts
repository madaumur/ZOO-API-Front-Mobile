import express, { request, Request, Response } from 'express'

const userRouter: express.Router = express.Router()

userRouter.get('/', (req: Request, res: Response): void => {
	res.status(200).send(
		'<h4 style="font-family: Lato,sans-serif; color:purple">User API</h4>'
	)
})

export default userRouter
