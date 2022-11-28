import express from 'express'
import loggerMiddleware from '../middleware/logger'

const zoneRouter: express.Router = express.Router()

zoneRouter.get('/api/zone', loggerMiddleware)

export default zoneRouter
