import express from 'express'
import animalController from '../controller/animal.controller'
import loggerMiddleware from '../middleware/logger'

const animalRouter: express.Router = express.Router()

// CREATE AN ANIMAL
animalRouter.post(
	'/api/animals/new',
	loggerMiddleware,
	animalController.createAnimal
)

// GET ALL ANIMALS
animalRouter.get(
	'/api/animals/',
	loggerMiddleware,
	animalController.getAllAnimals,
)

// GET ONE ANIMAL BY ID
animalRouter.get(
	'/api/animals/:id',
	loggerMiddleware,
	animalController.getAnimal
)

// UPDATE AN ANIMAL BY ID
animalRouter.put(
	'/api/animals/:id',
	loggerMiddleware,
	animalController.updateAnimal
)

// DELETE AN ANIMAL BY ID
animalRouter.delete(
	'/api/animals/:id',
	loggerMiddleware,
	animalController.deleteAnimal
)

export default animalRouter
