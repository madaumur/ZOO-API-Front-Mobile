import { Request, Response, NextFunction } from 'express'
import { enclosureModel, enclosureInterface } from '../model/enclosure.model'
import logger from '../utils/logger'

/**
 *		CREATE AN ENCLOSURE
 */
const createEnclosure = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	const enclosureData: enclosureInterface = req.body
	const enclosure = new enclosureModel({
		...enclosureData,
	})

	enclosure
		.save()
		.then((): void => {
			res.status(201).json({ message: 'New enclosure registered' })
		})
		.catch((error): void => {
			res.status(400).json({ error })
		})
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

/**
 *		GET ONE ENCLOSURE
 */
const getEnclosure = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	enclosureModel
		.findById(req.params.id)
		.populate('zone')
		.then(
			(result): Response<any> =>
				result
					? res.status(200).json(result)
					: res.status(404).json({ error: 'Enclosure not found' })
		)
		.catch((error): Response<any> => res.status(500).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

/**
 *		UPDATE ONE ENCLOSURE
 */
const updateEnclosure = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	enclosureModel
		.findByIdAndUpdate(req.params.id, req.body)
		.then(
			(result): Response<any> =>
				result
					? res.status(202).json(result)
					: res.status(404).json({ error: 'Enclosure not found' })
		)
		.catch((error) => res.status(500).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

/**
 *		DELETE A ENCLOSURE
 */
const deleteenclosure = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	enclosureModel
		.findByIdAndDelete(req.params.id)
		.then(
			(result): Response<any> =>
				result
					? res.status(410).json(result)
					: res.status(404).json({ error: 'Enclosure not found' })
		)
		.catch((error): Response<any> => res.status(500).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

/**
 *		GET ALL ENCLOSURES
 */
const getAllEnclosures = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	enclosureModel
		.find()
		.then(
			(result): Response<any> =>
				result
					? res.status(200).json(result)
					: res.status(404).json({ error: 'Enclosures not found' })
		)
		.catch((error): Response<any> => res.status(404).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

export default {
	createEnclosure,
	getEnclosure,
	updateEnclosure,
	deleteenclosure,
	getAllEnclosures,
}
