import { Request, Response, NextFunction } from 'express'
import { specieModel, specieInterface } from '../model/specie.model'
import logger from '../utils/logger'

/**
 *		CREATE A SPECIE
 */
const createSpecie = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	const specieData: specieInterface = req.body
	const specie = new specieModel({
		...specieData,
	})

	specie
		.save()
		.then((): void => {
			res.status(201).json({ message: 'New specie registered' })
		})
		.catch((error): void => {
			res.status(400).json({ error })
		})
		.then((): void =>
			logger.info(
				`[${req.method}] ${req.originalUrl} | response [${res.statusCode}] ${res.statusMessage}`
			)
		)
}

/**
 *		GET ONE SPECIE
 */
const getSpecie = (req: Request, res: Response, next: NextFunction): void => {
	specieModel
		.findById(req.params.id)
		.then((result) =>
			result
				? res.status(200).json(result)
				: res.status(404).json({ error: 'Specie not found' })
		)
		.catch((error) => res.status(500).json({ error }))
		.then((): void =>
			logger.info(
				`[${req.method}] ${req.originalUrl} | response [${res.statusCode}] ${res.statusMessage}`
			)
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
	specieModel
		.find()
		.then((result) =>
			result
				? res.status(200).json(result)
				: res.status(404).json({ error: 'Species not found' })
		)
		.catch((error) => res.status(404).json({ error }))
		.then((): void =>
			logger.info(
				`[${req.method}] ${req.originalUrl} | response [${res.statusCode}] ${res.statusMessage}`
			)
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
	specieModel
		.findByIdAndUpdate(req.params.id, req.body)
		.then((result) =>
			result
				? res.status(202).json(result)
				: res.status(404).json({ error: 'Specie not found' })
		)
		.catch((error) => res.status(500).json({ error }))
		.then((): void =>
			logger.info(
				`[${req.method}] ${req.originalUrl} | response [${res.statusCode}] ${res.statusMessage}`
			)
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
	specieModel
		.findByIdAndDelete(req.params.id)
		.then((result) =>
			result
				? res.status(410).json(result)
				: res.status(404).json({ error: 'Specie not found' })
		)
		.catch((error) => res.status(500).json({ error }))
		.then((): void =>
			logger.info(
				`[${req.method}] ${req.originalUrl} | response [${res.statusCode}] ${res.statusMessage}`
			)
		)
}

export default {
	createSpecie,
	getAllSpecies,
	getSpecie,
	updateSpecie,
	deleteSpecie,
}
