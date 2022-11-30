import express from 'express'
import ZoneController from '../controller/zone.controller'
import LoggerMiddleware from '../middleware/logger'

const ZoneRouter: express.Router = express.Router()

// CREATE A ZONE
ZoneRouter.post('/api/zones/new', LoggerMiddleware, ZoneController.createZone)

// GET A ZONE BY ID
ZoneRouter.get('/api/zones/:id', LoggerMiddleware, ZoneController.getZone)

// UPDATE A ZONE BY ID
ZoneRouter.put('/api/zones/:id', LoggerMiddleware, ZoneController.updateZone)

// DELETE A ZONE BY ID
ZoneRouter.delete('/api/zones/:id', LoggerMiddleware, ZoneController.deleteZone)

// GET ALL ZONE
ZoneRouter.get('/api/zones/', LoggerMiddleware, ZoneController.getAllZones)

export default ZoneRouter
