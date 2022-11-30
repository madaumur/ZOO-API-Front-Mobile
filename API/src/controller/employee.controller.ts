import { Request, Response, NextFunction } from 'express'
import { EmployeeModel, EmployeeInterface } from '../model/employee.model'

import logger from '../utils/logger'

/**
 *		REGISTER A NEW EMPLOYEE
 */
const registerEmployee = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	const employeeData: EmployeeInterface = req.body
	const employee = new EmployeeModel({
		...employeeData,
	})

	employee
		.save()
		.then((result): void => {
			res.status(201).json({ message: 'Employee created', result })
		})
		.catch((error): void => {
			res.status(400).json({ error })
		})
		.then((): void => {
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		})
}

/**
 *		GET AN EMPLOYEE
 */
const getEmployee = (req: Request, res: Response, next: NextFunction): void => {
	EmployeeModel.findById(req.params.id)
		.then(
			(result): Response<any> =>
				result
					? res
							.status(200)
							.json({ message: 'Employee found', result })
					: res.status(404).json({ error: 'Employee not found' })
		)
		.catch((error): Response<any> => res.status(500).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

export default {
	registerEmployee,
	getEmployee,
}
