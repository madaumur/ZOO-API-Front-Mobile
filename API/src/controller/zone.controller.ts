import { Request, Response, NextFunction } from 'express'
import { zoneModel, zoneInterface } from '../model/zone.model'
import logger from '../utils/logger'

/**
 *		CREATE A ZONE
 */
const createZone = (req: Request, res: Response, next: NextFunction): void => {
	const zoneData: zoneInterface = req.body
	const zone = new zoneModel({
		...zoneData,
	})

	zone.save()
		.then((zone): void => {
			res.status(201).json({ message: 'New zone registered', zone })
		})
		.catch((error): void => {
			res.status(400).json({ error })
		})
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

/**
 *		GET ONE ZONE
 */
const getZone = (req: Request, res: Response, next: NextFunction): void => {
	zoneModel
		.findById(req.params.id)
		.then((result) =>
			result
				? res.status(200).json(result)
				: res.status(404).json({ error: 'Zone not found' })
		)
		.catch((error) => res.status(500).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

/**
 *		UPDATE ONE ZONE
 */
const updateZone = (req: Request, res: Response, next: NextFunction): void => {
	zoneModel
		.findByIdAndUpdate(req.params.id, req.body)
		.then((result) =>
			result
				? res.status(202).json(result)
				: res.status(404).json({ error: 'Zone not found' })
		)
		.catch((error) => res.status(500).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

/**
 *		DELETE A ZONE
 */
const deleteZone = (req: Request, res: Response, next: NextFunction): void => {
	zoneModel
		.findByIdAndDelete(req.params.id)
		.then((result) =>
			result
				? res.status(410).json(result)
				: res.status(404).json({ error: 'Zone not found' })
		)
		.catch((error) => res.status(500).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

/**
 *		GET ALL ZONES
 */
const getAllZones = (req: Request, res: Response, next: NextFunction): void => {
	zoneModel
		.find()
		.then((result) =>
			result
				? res.status(200).json(result)
				: res.status(404).json({ error: 'Zones not found' })
		)
		.catch((error) => res.status(404).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

export default {
	createZone,
	getZone,
	updateZone,
	deleteZone,
	getAllZones,
}
