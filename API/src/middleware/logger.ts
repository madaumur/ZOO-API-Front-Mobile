import { Request, Response, NextFunction } from 'express'
import logger from '../utils/logger'

function loggerMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
): void {
	logger.info(`[REQ] ${req.method} on ${req.originalUrl} | data: ${req.body}`)
	next()
}

export default loggerMiddleware
