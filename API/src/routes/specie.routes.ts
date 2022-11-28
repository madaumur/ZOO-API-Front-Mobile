import express from 'express'
import specieController from '../controller/specie.controller'
import loggerMiddleware from '../middleware/logger'

const specieRouter: express.Router = express.Router()

// CREATE A SPECIE
specieRouter.post(
	'/api/species/new',
	loggerMiddleware,
	specieController.createSpecie
)

// GET ALL SPECIES
specieRouter.get(
	'/api/species/',
	loggerMiddleware,
	specieController.getAllSpecies
)

// GET A SPECIE BY ID
specieRouter.get(
	'/api/species/:id',
	loggerMiddleware,
	specieController.getSpecie
)

// UPDATE A SPECIE BY ID
specieRouter.put(
	'/api/species/:id',
	loggerMiddleware,
	specieController.updateSpecie
)

// DELETE A SPECIE BY ID
specieRouter.delete(
	'/api/species/:id',
	loggerMiddleware,
	specieController.deleteSpecie
)

export default specieRouter
