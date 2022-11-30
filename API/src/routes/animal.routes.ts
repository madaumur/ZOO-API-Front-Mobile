import express from 'express'
import AnimalController from '../controller/animal.controller'
import LoggerMiddleware from '../middleware/logger'

const AnimalRouter: express.Router = express.Router()

// CREATE AN ANIMAL
AnimalRouter.post(
	'/api/animals/new',
	LoggerMiddleware,
	AnimalController.createAnimal
)

// GET ONE ANIMAL BY ID
AnimalRouter.get(
	'/api/animals/:id',
	LoggerMiddleware,
	AnimalController.getAnimal
)

// UPDATE AN ANIMAL BY ID
AnimalRouter.put(
	'/api/animals/:id',
	LoggerMiddleware,
	AnimalController.updateAnimal
)

// DELETE AN ANIMAL BY ID
AnimalRouter.delete(
	'/api/animals/:id',
	LoggerMiddleware,
	AnimalController.deleteAnimal
)

// GET ALL ANIMALS
AnimalRouter.get(
	'/api/animals/',
	LoggerMiddleware,
	AnimalController.getAllAnimals
)

// BRING IN AN ANIMAL
AnimalRouter.post(
	'/api/animals/:id/getin',
	LoggerMiddleware,
	AnimalController.moveAnimal
)

// TAKE OUT AN ANIMAL
AnimalRouter.post(
	'/api/animals/:id/getout',
	LoggerMiddleware,
	AnimalController.moveAnimal
)

// MOVE AN ANIMAL TO CLINIC
AnimalRouter.post(
	'/api/animals/:id/toclinic',
	LoggerMiddleware,
	AnimalController.moveAnimal
)

// MOVE AN ANIMAL TO LOAN
AnimalRouter.post(
	'/api/animals/:id/toloan',
	LoggerMiddleware,
	AnimalController.moveAnimal
)

export default AnimalRouter
