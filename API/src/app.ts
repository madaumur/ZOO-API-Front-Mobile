import express, { Application } from 'express'

import config from 'config'
import connect from './utils/connect'
import logger from './utils/logger'
import router from './routes'

const port: number = config.get<number>('port')

const app: Application = express()

app.use(express.json({ limit: '50mb' }))

/* router configuration */
app.use(router)

app.listen(port, async (): Promise<void> => {
	logger.info(`✅ Express Server launched successfully`)
	logger.info(`Express Server is running at http://localhost:${port}`)
	/* connection to db */
	await connect()
})
