import express from 'express'
import AnimalController from '../controller/animal.controller'
import Logger from '../middleware/log.middleware'

const AnimalRouter: express.Router = express.Router()

// CREATE AN ANIMAL
AnimalRouter.post('/api/animals/new', Logger, AnimalController.createAnimal)

// GET ONE ANIMAL BY ID
AnimalRouter.get('/api/animals/:id', Logger, AnimalController.getAnimal)

// UPDATE AN ANIMAL BY ID
AnimalRouter.put('/api/animals/:id', Logger, AnimalController.updateAnimal)

// DELETE AN ANIMAL BY ID
AnimalRouter.delete('/api/animals/:id', Logger, AnimalController.deleteAnimal)

// GET ALL ANIMALS
AnimalRouter.get('/api/animals/', Logger, AnimalController.getAllAnimals)

// BRING IN AN ANIMAL
AnimalRouter.post('/api/animals/:id/getin', Logger, AnimalController.moveAnimal)

// TAKE OUT AN ANIMAL
AnimalRouter.post(
	'/api/animals/:id/getout',
	Logger,
	AnimalController.moveAnimal
)

// MOVE AN ANIMAL TO CLINIC
AnimalRouter.post(
	'/api/animals/:id/toclinic',
	Logger,
	AnimalController.moveAnimal
)

// MOVE AN ANIMAL TO LOAN
AnimalRouter.post(
	'/api/animals/:id/toloan',
	Logger,
	AnimalController.moveAnimal
)

export default AnimalRouter
