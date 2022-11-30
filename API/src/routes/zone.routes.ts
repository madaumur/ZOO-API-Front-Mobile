import express from 'express'
import zoneController from '../controller/zone.controller'
import loggerMiddleware from '../middleware/logger'

const zoneRouter: express.Router = express.Router()

// CREATE A ZONE
zoneRouter.post('/api/zones/new', loggerMiddleware, zoneController.createZone)

// GET A ZONE BY ID
zoneRouter.get('/api/zones/:id', loggerMiddleware, zoneController.getZone)

// UPDATE A ZONE BY ID
zoneRouter.put('/api/zones/:id', loggerMiddleware, zoneController.updateZone)

// DELETE A ZONE BY ID
zoneRouter.delete('/api/zones/:id', loggerMiddleware, zoneController.deleteZone)

// GET ALL ZONE
zoneRouter.get('/api/zones/', loggerMiddleware, zoneController.getAllZones)

export default zoneRouter
