import express, { request, Request, Response } from 'express'
import fs from 'fs'

const animalRouter: express.Router = express.Router()

animalRouter.get('/', (req: Request, res: Response): void => {
	res.status(200).send(
		'<h4 style="font-family: Lato,sans-serif; color:purple">Animal API access</h4>'
	)
})

animalRouter.get('/listall', (req: Request, res: Response): void => {
	fs.readFile('./ressource/animals.json', 'utf-8', (error, result) => {
		if (error) {
			console.log(error)
		}

		res.status(200).end(`${result}`)
	})
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
