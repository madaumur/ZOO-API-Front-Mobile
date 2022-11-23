import { Date, Document } from 'mongoose'

interface employeeInterface extends Document {
	_id: string
	firstName: string
	lastName: string
	birth_date: Date
}

export { employeeInterface }
