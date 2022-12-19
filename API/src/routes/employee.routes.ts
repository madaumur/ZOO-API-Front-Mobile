import express from 'express'
import EmployeeController from '../controller/employee.controller'

import Logger from '../middleware/log.middleware'
import { Authentifaction } from '../middleware/auth.middleware'

const EmployeeRouter: express.Router = express.Router()

// REGISTER AN EMPLOYEE
EmployeeRouter.post(
	'/api/employees/register',
	Logger,
	EmployeeController.registerEmployee
)

// LOGIN AN EMPLOYEE
EmployeeRouter.post(
	'/api/employees/login',
	Logger,
	EmployeeController.loginEmployee
)

// GET AN EMPLOYEE
EmployeeRouter.get(
	'/api/employees/:id',
	Logger,
	Authentifaction,
	EmployeeController.getEmployee
)

// UPDATE AN EMPLOYEE
EmployeeRouter.put(
	'/api/employees/:id',
	Logger,
	EmployeeController.updateEmployee
)

// DELETE AN EMPLOYEE
EmployeeRouter.delete(
	'/api/employees/:id',
	Logger,
	EmployeeController.deleteEmployee
)

// GET ALL EMPLOYEEs
EmployeeRouter.get(
	'/api/employees/',
	Logger,
	EmployeeController.getAllEmployees
)
export default EmployeeRouter
