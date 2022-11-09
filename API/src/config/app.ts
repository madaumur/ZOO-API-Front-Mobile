import express, { Request, Response } from 'express'

/* Middleware */
import logger from '../middleware/logger'

/* Routes */
import apiRouter from '../router/apiRouter'
import animalRouter from '../router/animalRouter'
import userRouter from '../router/userRouter'

function createApp() {
	if (!process.env.PORT) {
		throw new Error('Please add the PORT environment variable')
	}

	const PORT: String = process.env.PORT
	const HOSTNAME: String = process.env.HOSTNAME || 'localhost'

	const app = express()

	app.use(express.json({ limit: '50mb' }))
	app.use(logger)

	/* router configuration */
	app.use('/api', apiRouter)
	app.use('/api/animal', animalRouter)
	app.use('/api/user', userRouter)

	app.listen(PORT, (): void => {
		console.log('[server] ✅ Express server connected successfully'),
			console.log(
				`[server] Express server is running at http://${HOSTNAME}:${PORT}`
			)
	})

	/* default route */
	app.get('/', function (req: Request, res: Response): void {
		res.send(
			'<h4 style="font-family: Lato,sans-serif; color:green">Welcome to the express server for a Zoo Exercise</h4>'
		)
	})

	return app
}

export default createApp
