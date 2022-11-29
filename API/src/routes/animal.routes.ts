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

// GET ALL ANIMALS
animalRouter.get(
	'/api/animals/',
	loggerMiddleware,
	animalController.getAllAnimals
)

// MOVE AN ANIMAL INSIDE
animalRouter.post(
	'/api/animals/:id/getin',
	loggerMiddleware,
	animalController.moveAnimal
)

// MOVE AN ANIMAL OUTSIDE
animalRouter.post(
	'/api/animals/:id/getout',
	loggerMiddleware,
	animalController.moveAnimal
)

// MOVE AN ANIMAL TO CLINIC
animalRouter.post(
	'/api/animals/:id/toclinic',
	loggerMiddleware,
	animalController.moveAnimal
)

// MOVE AN ANIMAL TO LOAN
animalRouter.post(
	'/api/animals/:id/toloan',
	loggerMiddleware,
	animalController.moveAnimal
)

export default animalRouter
