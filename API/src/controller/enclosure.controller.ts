import { Request, Response, NextFunction } from 'express'
import { EnclosureModel, EnclosureInterface } from '../model/enclosure.model'
import logger from '../utils/logger'

/**
 *		CREATE AN ENCLOSURE
 */
const createEnclosure = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	const enclosureData: EnclosureInterface = req.body
	const enclosure = new EnclosureModel({
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
	EnclosureModel.findById(req.params.id)
		.populate({ path: 'zone', select: 'name' })
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
	EnclosureModel.findByIdAndUpdate(req.params.id, req.body)
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
const deleteEnclosure = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	EnclosureModel.findByIdAndDelete(req.params.id)
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
	EnclosureModel.find()
		.populate({ path: 'zone', select: 'name' })
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
	deleteEnclosure,
	getAllEnclosures,
}
