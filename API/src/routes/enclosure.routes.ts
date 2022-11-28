import express from 'express'
import loggerMiddleware from '../middleware/logger'

const enclosureRouter: express.Router = express.Router()

enclosureRouter.get('/api/enclosure', loggerMiddleware)

export default enclosureRouter
