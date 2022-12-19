import express, { Application } from 'express'

import config from 'config'
import { connect } from './utils/connect'
import logger from './utils/logger'
import router from './routes'
import cors from 'cors'

const port: number = config.get<number>('port')

const app: Application = express()

app.use(express.json({ limit: '50mb' }))

/** Rules of the API */
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	)

	if (req.method == 'OPTIONS') {
		res.header(
			'Access-Control-Allow-Methods',
			'PUT, POST, PATCH, DELETE, GET'
		)
		return res.status(200).json({})
	}

	next()
})

/* router configuration */
app.use(router)

app.listen(port, async (): Promise<void> => {
	logger.info(`✅ Express Server launched successfully`)
	logger.info(`Express Server is running at http://localhost:${port}`)
	/* connection to db */
	await connect()
})
