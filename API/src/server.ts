import express, { Request, Response } from 'express'
/* Router */
import apiRouter from './router/apiRouter'
import animalRouter from './router/animalRouter'
import userRouter from './router/userRouter'

/* Middleware */
import apiLogger from './middleware/appLogger'

const app: express.Application = express()

const hostname: string = '127.0.0.1'
const port: number = 8080

app.use(express.json())
// Tester sans ça
app.use(express.urlencoded({ extended: false }))
app.use(apiLogger)

/* router configuration */
app.use('/api', apiRouter)
app.use('/api/animal', animalRouter)
app.use('/api/user', userRouter)
//app.use('/api/enclosure', enclosureRouter)

/* default */
app.get('/', function (req: Request, res: Response) {
	res.send(
		'<h4 style="font-family: Lato,sans-serif; color:green">Welcome to the express server for a Zoo Exercise</h4>'
	)
})

app.listen(port, (): void => {
	console.log(
		`[server] Express server is running at http://${hostname}:${port}`
	)
})
