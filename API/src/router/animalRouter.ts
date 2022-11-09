import express, { Request, Response } from 'express'
import { animalModel, IAnimal } from '../model/animal'

const animalRouter: express.Router = express.Router()

/*
	@usage : 	test URL
	@url: 		http://localhost:8080/api/animal/
	@methode: 	GET
	@fields: 	none
	@access: 	public
*/
animalRouter.get('/', (req: Request, res: Response): void => {
	res.status(200).send(
		'<h4 style="font-family: Lato,sans-serif; color:purple">Animal API access</h4>'
	)
})

animalRouter.get('/list', async (req: Request, res: Response) => {
	try {
		const animal: IAnimal[] = await animalModel.find().exec()

		return res.status(200).json(animal)
	} catch (error) {
		console.error(error)
		return res.status(500).json({ error: 'Sorry, something went wrong :/' })
	}
})

animalRouter.post('/new', (req: Request, res: Response): void => {
	let data = req.body
	res.status(201).json({
		msg: 'New animal received',
		data: data,
	})
})

animalRouter.get('/test', (req: Request, res: Response): void => {
	res.status(200).send(
		'<h4 style="font-family: Lato,sans-serif; color:red">Production test</h4>'
	)
})

export default animalRouter
