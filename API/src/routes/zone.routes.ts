import express from 'express'
import ZoneController from '../controller/zone.controller'
import Logger from '../middleware/log.middleware'

const ZoneRouter: express.Router = express.Router()

// CREATE A ZONE
ZoneRouter.post('/api/zones/new', Logger, ZoneController.createZone)

// GET A ZONE BY ID
ZoneRouter.get('/api/zones/:id', Logger, ZoneController.getZone)

// UPDATE A ZONE BY ID
ZoneRouter.put('/api/zones/:id', Logger, ZoneController.updateZone)

// DELETE A ZONE BY ID
ZoneRouter.delete('/api/zones/:id', Logger, ZoneController.deleteZone)

// GET ALL ZONE
ZoneRouter.get('/api/zones/', Logger, ZoneController.getAllZones)

export default ZoneRouter
