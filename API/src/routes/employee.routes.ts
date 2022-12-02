import express from 'express'
import employeeController from '../controller/employee.controller'

import LoggerMiddleware from '../middleware/logger.middleware'

const EmployeeRouter: express.Router = express.Router()

// REGISTER AN EMPLOYEE
EmployeeRouter.post(
	'/api/employees/register',
	LoggerMiddleware,
	employeeController.registerEmployee
)

// LOGIN AN EMPLOYEE
EmployeeRouter.post(
	'/api/employees/login',
	LoggerMiddleware,
	employeeController.loginEmployee
)

// GET AN EMPLOYEE
EmployeeRouter.get(
	'/api/employees/:id',
	LoggerMiddleware,
	employeeController.getEmployee
)

// UPDATE AN EMPLOYEE
EmployeeRouter.put(
	'/api/employees/:id',
	LoggerMiddleware
	//employeeController.updateEmployee
)

// DELETE AN EMPLOYEE
EmployeeRouter.delete(
	'/api/employees/:id',
	LoggerMiddleware
	//employeeController.deleteEmployee
)

// GET ALL EMPLOYEEs
EmployeeRouter.get(
	'/api/employees/',
	LoggerMiddleware,
	employeeController.getAllEmployees
)
export default EmployeeRouter
