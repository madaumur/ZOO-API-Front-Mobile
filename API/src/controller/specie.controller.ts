import { Request, Response, NextFunction } from 'express'
import { AnimalModel } from '../model/animal.model'
import { SpecieModel, SpecieInterface } from '../model/specie.model'
import { urlToPosition, reversePosition } from '../utils/function'
import logger from '../utils/logger'

/**
 *		CREATE A SPECIE
 */
const createSpecie = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	const specieData: SpecieInterface = req.body
	const specie = new SpecieModel({
		...specieData,
	})

	specie
		.save()
		.then((specie): void => {
			res.status(201).json({ message: 'New specie registered', specie })
		})
		.catch((error): void => {
			res.status(400).json({ error })
		})
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

/**
 *		GET ONE SPECIE
 */
const getSpecie = (req: Request, res: Response, next: NextFunction): void => {
	SpecieModel.findById(req.params.id)
		.populate({ path: 'enclosure', select: 'name zone' })
		.then(
			(result): Response<any> =>
				result
					? res.status(200).json(result)
					: res.status(404).json({ error: 'Specie not found' })
		)
		.catch((error): Response<any> => res.status(500).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

/**
 *		UPDATE ONE SPECIE
 */
const updateSpecie = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	SpecieModel.findByIdAndUpdate(req.params.id, req.body)
		.then(
			(result): Response<any> =>
				result
					? res.status(202).json(result)
					: res.status(404).json({ error: 'Specie not found' })
		)
		.catch((error): Response<any> => res.status(500).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

/**
 *		DELETE A SPECIE
 */
const deleteSpecie = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	SpecieModel.findByIdAndDelete(req.params.id)
		.then(
			(result): Response<any> =>
				result
					? res.status(410).json(result)
					: res.status(404).json({ error: 'Specie not found' })
		)
		.catch((error): Response<any> => res.status(500).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

/**
 *		GET ALL SPECIES
 */
const getAllSpecies = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	SpecieModel.find()
		.populate({ path: 'enclosure', select: 'name zone' })
		.then(
			(result): Response<any> =>
				result
					? res.status(200).json(result)
					: res.status(404).json({ error: 'Species not found' })
		)
		.catch((error): Response<any> => res.status(404).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

/**
 *		LIST ALL ANIMALS FROM A SPECIE
 */
const listAnimalFromSpecie = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	SpecieModel.findById(req.params.id)
		.then((result): void => {
			if (!result) {
				res.status(404).json({ error: 'Specie not found' })
			} else {
				AnimalModel.find({ specie: result._id }).then(
					(result): Response<any> =>
						result
							? res.status(200).json(result)
							: res
									.status(404)
									.json({ error: 'Animals not found' })
				)
			}
		})
		.catch((error): Response<any> => res.status(404).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

/**
 *		MOVE ALL ANIMAL FROM A SPECIE ( EXCEPT THOSE IN THE BODY'S ARRAY )
 */
const moveSpecie = (req: Request, res: Response, next: NextFunction): void => {
	let futurePlace: number = urlToPosition(req.url)
	let actualPlace: number = reversePosition(futurePlace)
	let animalList: string[] = req.body

	if (req.body) {
		SpecieModel.findById(req.params.id)
			.then((resultSpe) => {
				if (!resultSpe) {
					res.status(404).json({ error: 'Specie not found' })
				} else {
					AnimalModel.findOneAndUpdate(
						{
							specie: resultSpe._id,
							_id: { $nin: animalList },
							position: actualPlace,
						},
						{ $set: { position: futurePlace } }
					).then(
						(resultAni): Response<any> =>
							resultAni
								? res.status(202).json(resultAni)
								: res.status(404).json({
										error: 'Animals not found',
								  })
					)
				}
			})
			.catch((error): Response<any> => res.status(404).json({ error }))
			.then((): void =>
				logger.info(
					`[RES] code: ${res.statusCode} (${res.statusMessage})`
				)
			)
	}
}

export default {
	createSpecie,
	getSpecie,
	updateSpecie,
	deleteSpecie,
	getAllSpecies,
	listAnimalFromSpecie,
	moveSpecie,
}
