import express from 'express'

const apiRouter: express.Router = express.Router()

apiRouter.get('/', (req: express.Request, res: express.Response): void => {
	res.status(200).send(
		'<h2 style="font-family: Lato,sans-serif; color:green">Welcome to the API for a Zoo Exercise</h2>'
	)
})

apiRouter.get(
	'/version',
	(req: express.Request, res: express.Response): void => {
		res.status(200).send(
			'<h2 style="font-family: Lato,sans-serif; color:red">APIversion : 0.0.1</h2>'
		)
	}
)

export default apiRouter
