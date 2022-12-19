import { model, Schema } from 'mongoose'

import EmployeeInterface from '../interface/employee.interface'

import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const EmployeeSchema = new Schema<EmployeeInterface>(
	{
		_id: {
			type: String,
			/*unique: true,*/ required: [true, 'id is required'],
		},
		first_name: {
			type: String,
			required: [true, 'first name is required'],
			camelCase: true,
			trim: true,
		},
		last_name: {
			type: String,
			required: [true, 'last name is required'],
			uppercase: true,
			trim: true,
		},
		birth_date: { type: Date, required: false },
		email: {
			type: String,
			required: [true, 'email is required'],
			unique: true,
			lowercase: true,
			trim: true,
			validate(v: any): void {
				if (!validator.isEmail(v))
					throw new Error("email isn't correct")
			},
		},
		password: {
			type: String,
			required: [true, 'password is required'],
			validate(v: any): void {
				if (!validator.isLength(v, { min: 4 }))
					throw new Error('password must be at least 4 characters')
			},
		},
		passwordHash: {
			type: String,
			required: false,
		},
		role: {
			type: String,
			required: false,
			enum: ['NONE', 'SOINEUR', 'VETERINAIRE', 'ADMIN'],
		},
		authTokens: [
			{
				authToken: {
					type: String,
					required: true,
				},
			},
		],
	},
	{ versionKey: false, timestamps: true }
)

/* ---------------------------------------------------------------- */
/* 	@TODO réorganiser cette partie dans un bazard service 			*/
/* ---------------------------------------------------------------- */

EmployeeSchema.pre('save', async function (): Promise<void> {
	if (this.isModified('password')) {
		this.passwordHash = await bcrypt.hash(this.password, 8)
	}
})

EmployeeSchema.methods.generateAuthTokenandSave =
	async function (): Promise<void> {
		const authToken: string = jwt.sign(
			{ username: this.username, role: this.role },
			'config.privateKey'
		)
		this.authTokens.push({ authToken })
		await this.save()
	}

const EmployeeModel = model<EmployeeInterface>('employee', EmployeeSchema)

export default EmployeeModel
