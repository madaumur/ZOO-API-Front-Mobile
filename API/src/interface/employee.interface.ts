import { Date, Document } from 'mongoose'

export default interface EmployeeInterface extends Document {
	_id: string
	first_name: string
	last_name: string
	birth_date?: Date
	email: string
	password: string
	passwordHash: string
	role: string /* 'NONE', 'SOINEUR', 'VETERINAIRE', 'ADMIN' */
	authTokens: [authToken: string]

	generateAuthTokenandSave():Promise<void>
}
