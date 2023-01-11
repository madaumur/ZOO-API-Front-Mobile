import { UserRole } from '../enum/user-role.enum'

export class User {
	_id!: string
	first_name!: string
	last_name!: string
	birth_date?: Date
	email!: string
	password!: string
	passwordHash?: string
	role!: string
	authTokens?: Object
}
