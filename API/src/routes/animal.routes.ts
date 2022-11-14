import express from 'express'
import animalController from '../controller/animal.controller'
import loggerMiddleware from '../middleware/logger'

const animalRouter: express.Router = express.Router()

animalRouter.post(
	'/api/animals/new',
	loggerMiddleware,
	animalController.createAnimal
)

animalRouter.get(
	'/api/animals/',
	loggerMiddleware,
	animalController.getAllAnimals,
)
animalRouter.get(
	'/api/animals/:id',
	loggerMiddleware,
	animalController.getAnimal
)

animalRouter.put(
	'/api/animals/:id',
	loggerMiddleware,
	animalController.updateAnimal
)

animalRouter.delete(
	'/api/animals/:id',
	loggerMiddleware,
	animalController.deleteAnimal
)

export default animalRouter
