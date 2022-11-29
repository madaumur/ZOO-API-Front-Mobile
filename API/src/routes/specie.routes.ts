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

// GET ALL SPECIES
specieRouter.get(
	'/api/species/',
	loggerMiddleware,
	specieController.getAllSpecies
)

// LIST ALL ANIMALS FROM A SPECIE
specieRouter.get(
	'/api/species/:id/animals',
	loggerMiddleware,
	specieController.listAnimalFromSpecie
)

// GET IN ALL ANIMALS FROM A SPECIE (EXCEPT THOSE IN CLINIC OR LOAN)
specieRouter.put(
	'/api/species/:id/getin',
	loggerMiddleware,
	specieController.moveSpecie
)

// GET OUT ALL ANIMALS FROM A SPECIE (EXCEPT THOSE IN CLINIC OR LOAN)
specieRouter.put(
	'/api/species/:id/getout',
	loggerMiddleware,
	specieController.moveSpecie
)
export default specieRouter
