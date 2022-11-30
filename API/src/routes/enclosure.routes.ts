import express from 'express'
import EnclosureController from '../controller/enclosure.controller'
import LoggerMiddleware from '../middleware/logger'

const EnclosureRouter: express.Router = express.Router()

// CREATE AN ENCLOSURE
EnclosureRouter.post(
	'/api/Enclosures/new',
	LoggerMiddleware,
	EnclosureController.createEnclosure
)

// GET AN ENCLOSURE BY ID
EnclosureRouter.get(
	'/api/Enclosures/:id',
	LoggerMiddleware,
	EnclosureController.getEnclosure
)

// UPDATE AN ENCLOSURE BY ID
EnclosureRouter.put(
	'/api/Enclosures/:id',
	LoggerMiddleware,
	EnclosureController.updateEnclosure
)

// DELETE AN ENCLOSURE BY ID
EnclosureRouter.delete(
	'/api/Enclosures/:id',
	LoggerMiddleware,
	EnclosureController.deleteEnclosure
)

// GET ALL ENCLOSURE
EnclosureRouter.get(
	'/api/enclosures/',
	LoggerMiddleware,
	EnclosureController.getAllEnclosures
)

export default EnclosureRouter
