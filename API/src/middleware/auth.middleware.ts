import { Request, Response, NextFunction } from 'express'
import EmployeeModel from '../model/employee.model'
import jwt, { JwtPayload } from 'jsonwebtoken'

export const Authentifaction = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		const authToken = req.headers.authorization?.split(' ')[1]

		if (authToken) {
			const decodedToken: string | JwtPayload = jwt.verify(
				authToken,
				'foo'
			)

			res.locals.jwt = decodedToken

			const employee = EmployeeModel.findOne({
				_id: res.locals.jwt._id,
				'authTokens.authToken': authToken,
			})

			if (!employee) {
				throw new Error()
			}

			next()
		}
	} catch (e) {
		res.status(401).json({ error: 'Authentication failed' })
	}
}
