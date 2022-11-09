import express, { Request, Response, NextFunction } from 'express'

let appLogger = (req: Request, res: Response, next: NextFunction): void => {
	let url: string = req.url

	let method: string = req.method
	let date: string = new Date().toLocaleDateString()
	let time: string = new Date().toLocaleTimeString()
	let result: string = `[server_log] [${date}-${time}] ${method} on '${url}'`

	console.log(result)
	next()
}

export default appLogger
