import express, { Request, Response } from 'express'
import apiRouter from './router/apiRouter'
import animalRouter from './router/animalRouter'
import userRouter from './router/userRouter'

const app: express.Application = express()

const hostname: string = '127.0.0.1'
const port: number = 9000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/* router configuration */
app.use('/api', apiRouter)
app.use('/api/animal', animalRouter)
app.use('/api/user', userRouter)

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

/*
		fs.readFile(
			pathToFileURL('./ressource/animaux.json'),
			'utf-8',
			(error, result) => {
				if (error) {
					console.log(error)
				}
				response.end(
					`<pre styke="font-family: Lato,sans-serif; color:green">${result}</pre>`
				)
			}



export default class Server {


    readonly port: number


    constructor( port:  number) {

        this.port = port;

    }

    start() {

        const app = express()

        app.get("/", function(req: Request, res: Response) {
            res.send('Salut les zigotos')
        })
        app.listen( this.port, () => {
            console.log("[server] Server is running at https://localhost:"+ this.port)
        })
    }
    */
