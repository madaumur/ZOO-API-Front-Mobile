import express, { Request, Response } from 'express'
import specieController from '../controller/specie.controller'
import loggerMiddleware from '../middleware/logger'


const specieRouter: express.Router = express.Router()

specieRouter.get(
	'/api/species/',
	loggerMiddleware,
	specieController.getAllSpecies
)
specieRouter.get(
	'/api/species/:id',
	loggerMiddleware,
	specieController.getSpecie
)
export default specieRouter