import express from 'express'
import SpecieController from '../controller/specie.controller'
import LoggerMiddleware from '../middleware/logger.middleware'

const SpecieRouter: express.Router = express.Router()

// CREATE A SPECIE
SpecieRouter.post(
	'/api/species/new',
	LoggerMiddleware,
	SpecieController.createSpecie
)

// GET A SPECIE BY ID
SpecieRouter.get(
	'/api/species/:id',
	LoggerMiddleware,
	SpecieController.getSpecie
)

// UPDATE A SPECIE BY ID
SpecieRouter.put(
	'/api/species/:id',
	LoggerMiddleware,
	SpecieController.updateSpecie
)

// DELETE A SPECIE BY ID
SpecieRouter.delete(
	'/api/species/:id',
	LoggerMiddleware,
	SpecieController.deleteSpecie
)

// GET ALL SPECIES
SpecieRouter.get(
	'/api/species/',
	LoggerMiddleware,
	SpecieController.getAllSpecies
)

// LIST ALL ANIMALS FROM A SPECIE
SpecieRouter.get(
	'/api/species/:id/animals',
	LoggerMiddleware,
	SpecieController.listAnimalFromSpecie
)

// BRING IN ALL ANIMALS FROM A SPECIE (EXCEPT THOSE IN CLINIC OR LOAN)
SpecieRouter.put(
	'/api/species/:id/getin',
	LoggerMiddleware,
	SpecieController.moveSpecie
)

// TAKE OUT ALL ANIMALS FROM A SPECIE (EXCEPT THOSE IN CLINIC OR LOAN)
SpecieRouter.put(
	'/api/species/:id/getout',
	LoggerMiddleware,
	SpecieController.moveSpecie
)
export default SpecieRouter
