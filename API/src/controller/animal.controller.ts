import { Request, Response, NextFunction } from 'express'

import AnimalInterface from '../interface/animal.interface'
import AnimalModel from '../model/animal.model'

import { urlToPosition } from '../utils/function'
import logger from '../utils/logger'

/**
 *		CREATE AN ANIMAL
 */
const createAnimal = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	const animalData: AnimalInterface = req.body
	const animal = new AnimalModel({
		...animalData,
	})

	animal
		.save()
		.then((result): void => {
			res.status(201).json(result)
		})
		.catch((error): void => {
			res.status(400).json({ error })
		})
		.then((): void => {
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		})
}

/**
 *		GET ONE ANIMAL
 */
const getAnimal = (req: Request, res: Response, next: NextFunction): void => {
	AnimalModel.findById(req.params.id)
		.populate({ path: 'specie', select: 'name enclosure' })
		.then(
			(result): Response<any> =>
				result
					? res.status(200).json(result)
					: res.status(404).json({ error: 'Animal not found' })
		)
		.catch((error): Response<any> => res.status(500).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

/**
 *		UPDATE ONE ANIMAL
 */
const updateAnimal = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	AnimalModel.findByIdAndUpdate(req.params.id, req.body)
		.then(
			(result): Response<any> =>
				result
					? res.status(202).json(result)
					: res.status(404).json({ error: 'Animal not found' })
		)
		.catch((error): Response<any> => res.status(500).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

/**
 *		DELETE AN ANIMAL
 */
const deleteAnimal = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	AnimalModel.findByIdAndDelete(req.params.id)
		.then(
			(result): Response<any> =>
				result
					? res.status(410).json(result)
					: res.status(404).json({ error: 'Animal not found' })
		)
		.catch((error): Response<any> => res.status(500).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

/**
 *		GET ALL ANIMALS
 */
const getAllAnimals = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	AnimalModel.find()
		.populate({ path: 'specie', select: 'name enclosure' })
		.then(
			(result): Response<any> =>
				result
					? res.status(200).json(result)
					: res.status(404).json({ error: 'Animals not found' })
		)
		.catch((error): Response<any> => res.status(404).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

/**
 *		MOVE AN ANIMAL
 */
const moveAnimal = (req: Request, res: Response, next: NextFunction): void => {
	const place: number = urlToPosition(req.url)
	AnimalModel.findById(req.params.id)
		.then((result): void => {
			if (!result) {
				res.status(404).json({ error: 'Animal not found' })
			} else {
				switch (place) {
					case 0:
						AnimalModel.updateOne(
							{ _id: req.params.id },
							{ $set: { position: 0 } }
						)
							.orFail()
							.exec()
						res.status(202).json({
							message: 'Animal is now outside',
							result,
						})
						break
					case 1:
						AnimalModel.updateOne(
							{ _id: req.params.id },
							{ $set: { position: 1 } }
						)
							.orFail()
							.exec()
						res.status(202).json({
							message: 'Animal is now inside',
							result,
						})
						break
					case 2:
						AnimalModel.updateOne(
							{ _id: req.params.id },
							{ $set: { position: 2 } }
						)
							.orFail()
							.exec()
						res.status(202).json({
							message: 'Animal is now in the clinic',
							result,
						})
						break
					case 3:
						AnimalModel.updateOne(
							{ _id: req.params.id },
							{ $set: { position: 3 } }
						)
							.orFail()
							.exec()
						res.status(202).json({
							message: 'Animal is now on loan',
							result,
						})
						break
					default:
						res.status(400).json({ error: 'Bad request' })
						break
				}
			}
		})
		.catch((error): Response<any> => res.status(500).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

export default {
	createAnimal,
	getAnimal,
	updateAnimal,
	deleteAnimal,
	getAllAnimals,
	moveAnimal,
}
