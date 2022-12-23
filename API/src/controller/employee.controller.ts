import { Authentifaction } from './../middleware/auth.middleware'
import { Request, Response, NextFunction } from 'express'

import EmployeeInterface from '../interface/employee.interface'
import EmployeeModel from '../model/employee.model'

import logger from '../utils/logger'
import bcrypt from 'bcryptjs'

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

/**
 *		UPDATE AN EMPLOYEE
 */
const updateEmployee = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	EmployeeModel.findByIdAndUpdate(req.params.id, req.body)
		.then(
			(result): Response<any> =>
				result
					? res
							.status(202)
							.json({ message: 'Employee updated', result })
					: res.status(404).json({ error: 'Employee not found' })
		)
		.catch((error): Response<any> => res.status(500).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

/**
 *		DELETE AN ANIMAL
 */
const deleteEmployee = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	EmployeeModel.findByIdAndDelete(req.params.id)
		.then(
			(result): Response<any> =>
				result
					? res
							.status(410)
							.json({ message: 'Employee deleted', result })
					: res.status(404).json({ error: 'Employee not found' })
		)
		.catch((error): Response<any> => res.status(500).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

/**
 *		GET ALL EMPLOYEES
 */
const getAllEmployees = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	EmployeeModel.find()
		.then(
			(result): Response<any> =>
				result
					? res
							.status(200)
							.json({ message: 'Employees found', result })
					: res.status(404).json({ error: 'Employees not found' })
		)
		.catch((error): Response<any> => res.status(500).json({ error }))
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}

/**
 *		LOGIN AN EMPLOYEE
 */
const loginEmployee = (req: Request, res: Response, next: NextFunction) => {
	const { email, password } = req.body

	EmployeeModel.findOne({ email: email })
		.then((resultEmp) => {
			if (!resultEmp) {
				res.status(404).json({
					error: "Can't find employee, check email",
				})
			} else {
				bcrypt.compare(
					password,
					resultEmp.passwordHash,
					(error, resultCmp): void => {
						if (!resultCmp) {
							res.status(400).json({
								error: "Can't login, check password",
							})
						} else {
							const authToken: Promise<void> =
								resultEmp.generateAuthTokenandSave()
							res.status(200).json({
								message: 'Login successfully',
								resultEmp,
								authToken,
							})
						}
					}
				)
			}
		})
		.catch(
			(error): Response<any> =>
				res.status(500).json({ error: 'Server error' })
		)
		.then((): void =>
			logger.info(`[RES] code: ${res.statusCode} (${res.statusMessage})`)
		)
}


export default {
	registerEmployee,
	getEmployee,
	updateEmployee,
	deleteEmployee,
	getAllEmployees,
	loginEmployee,
}
