import express from 'express'
import employeeController from '../controller/employee.controller'

import LoggerMiddleware from '../middleware/logger'

const EmployeeRouter: express.Router = express.Router()

// REGISTER AN EMPLOYEE
EmployeeRouter.post(
	'/api/employees/register',
	LoggerMiddleware,
	employeeController.registerEmployee
)

// GET AN EMPLOYEE
EmployeeRouter.post(
	'/api/employees/:id',
	LoggerMiddleware,
	employeeController.getEmployee
)

// UPDATE AN EMPLOYEE
EmployeeRouter.put(
	'/api/employees/:id',
    LoggerMiddleware,
	//employeeController.updateEmployee
)

// DELETE AN EMPLOYEE
EmployeeRouter.delete(
	'/api/employees/:id',
    LoggerMiddleware,
	//employeeController.deleteEmployee
)