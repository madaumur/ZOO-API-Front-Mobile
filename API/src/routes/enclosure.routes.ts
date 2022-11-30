import express from 'express'
import enclosureController from '../controller/enclosure.controller'
import loggerMiddleware from '../middleware/logger'

const enclosureRouter: express.Router = express.Router()

// CREATE AN ENCLOSURE
enclosureRouter.post(
	'/api/Enclosures/new',
	loggerMiddleware,
	enclosureController.createEnclosure
)

// GET AN ENCLOSURE BY ID
enclosureRouter.get(
	'/api/Enclosures/:id',
	loggerMiddleware,
	enclosureController.getEnclosure
)

// UPDATE AN ENCLOSURE BY ID
enclosureRouter.put(
	'/api/Enclosures/:id',
	loggerMiddleware,
	enclosureController.updateEnclosure
)

// DELETE AN ENCLOSURE BY ID
enclosureRouter.delete(
	'/api/Enclosures/:id',
	loggerMiddleware,
	enclosureController.deleteEnclosure
)

// GET ALL ENCLOSURE
enclosureRouter.get(
	'/api/enclosures/',
	loggerMiddleware,
	enclosureController.getAllEnclosures
)

export default enclosureRouter
