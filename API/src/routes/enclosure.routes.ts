import express from 'express'
import EnclosureController from '../controller/enclosure.controller'
import Logger from '../middleware/log.middleware'

const EnclosureRouter: express.Router = express.Router()

// CREATE AN ENCLOSURE
EnclosureRouter.post(
	'/api/Enclosures/new',
	Logger,
	EnclosureController.createEnclosure
)

// GET AN ENCLOSURE BY ID
EnclosureRouter.get(
	'/api/Enclosures/:id',
	Logger,
	EnclosureController.getEnclosure
)

// UPDATE AN ENCLOSURE BY ID
EnclosureRouter.put(
	'/api/Enclosures/:id',
	Logger,
	EnclosureController.updateEnclosure
)

// DELETE AN ENCLOSURE BY ID
EnclosureRouter.delete(
	'/api/Enclosures/:id',
	Logger,
	EnclosureController.deleteEnclosure
)

// GET ALL ENCLOSURE
EnclosureRouter.get(
	'/api/enclosures/',
	Logger,
	EnclosureController.getAllEnclosures
)

export default EnclosureRouter
