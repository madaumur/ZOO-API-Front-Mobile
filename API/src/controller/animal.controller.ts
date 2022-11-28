import { Request, Response, NextFunction } from 'express'
import { animalModel, animalInterface } from '../model/animal.model'
import logger from '../utils/logger'

/**
 *		CREATE AN ANIMAL
 */
const createAnimal = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	const animalData: animalInterface = req.body
	const animal = new animalModel({
		...animalData,
	})

	animal
		.save()
		.then((animal): void => {
			res.status(201).json({ message: 'New animal registered', animal })
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
const getAnimal = (req: Request, res: Response, next: NextFunction) => {
	animalModel
		.findById(req.params.id)
		.populate({ path: 'specie', select: 'name enclosure' })
		.then((result) =>
			result
				? res.status(200).json(result)
				: res.status(404).json({ error: 'Animal not found' })
		)
		.catch((error) => res.status(500).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)

	return animalModel
}

/**
 *		GET ALL ANIMALS
 */
const getAllAnimals = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	animalModel
		.find()
		.populate({ path: 'specie', select: 'name enclosure' })
		.then((result) =>
			result
				? res.status(200).json(result)
				: res.status(404).json({ error: 'Animals not found' })
		)
		.catch((error) => res.status(404).json({ error }))
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
	animalModel
		.findByIdAndUpdate(req.params.id, req.body)
		.then((result) =>
			result
				? res.status(202).json(result)
				: res.status(404).json({ error: 'Animal not found' })
		)
		.catch((error) => res.status(500).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

// /**
//  *		UPDATE ONE ANIMAL
//  */
// const moveInsideAnimal = (
// 	req: Request,
// 	res: Response,
// 	next: NextFunction
// ): void => {
// 	animalModel
// 		.findById(req.params.id)
// 		.updateOne()

// }

/**
 *		DELETE AN ANIMAL
 */
const deleteAnimal = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	animalModel
		.findByIdAndDelete(req.params.id)
		.then((result) =>
			result
				? res.status(410).json(result)
				: res.status(404).json({ error: 'Animal not found' })
		)
		.catch((error) => res.status(500).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

export default {
	createAnimal,
	getAllAnimals,
	getAnimal,
	updateAnimal,
	deleteAnimal,
}
