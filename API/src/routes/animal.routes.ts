import express, { Request, Response } from 'express'
import { findAnimal, listAnimals } from '../service/animal.service'
import logger from '../utils/logger'

const animalRouter: express.Router = express.Router()

animalRouter.get('/api/animals/info', (req: Request, res: Response): void => {
	res.status(200).send('Welcome on animals API')
})

animalRouter.get('/api/animals', async (req: Request, res: Response) => {
	const animals = await listAnimals()
	return res.status(200).json(animals)
})

animalRouter.get('/api/animals/:id', async (req: Request, res: Response) => {
	const animal = await findAnimal(req.params.id)
	return res.status(200).json(animal)
})

export default animalRouter
