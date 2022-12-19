import express from 'express'
import SpecieController from '../controller/specie.controller'
import Logger from '../middleware/log.middleware'

const SpecieRouter: express.Router = express.Router()

// CREATE A SPECIE
SpecieRouter.post('/api/species/new', Logger, SpecieController.createSpecie)

// GET A SPECIE BY ID
SpecieRouter.get('/api/species/:id', Logger, SpecieController.getSpecie)

// UPDATE A SPECIE BY ID
SpecieRouter.put('/api/species/:id', Logger, SpecieController.updateSpecie)

// DELETE A SPECIE BY ID
SpecieRouter.delete('/api/species/:id', Logger, SpecieController.deleteSpecie)

// GET ALL SPECIES
SpecieRouter.get('/api/species/', Logger, SpecieController.getAllSpecies)

// LIST ALL ANIMALS FROM A SPECIE
SpecieRouter.get(
	'/api/species/:id/animals',
	Logger,
	SpecieController.listAnimalFromSpecie
)

// BRING IN ALL ANIMALS FROM A SPECIE (EXCEPT THOSE IN CLINIC OR LOAN)
SpecieRouter.put('/api/species/:id/getin', Logger, SpecieController.moveSpecie)

// TAKE OUT ALL ANIMALS FROM A SPECIE (EXCEPT THOSE IN CLINIC OR LOAN)
SpecieRouter.put('/api/species/:id/getout', Logger, SpecieController.moveSpecie)
export default SpecieRouter
