import bcrypt from 'bcryptjs'
import validator from 'validator'
import { model, Schema } from 'mongoose'
import { EmployeeInterface } from '../interface/employee.interface'

const EmployeeSchema = new Schema<EmployeeInterface>(
	{
		_id: {
			type: String,
			/*unique: true,*/ required: [true, 'id is required'],
		},
		first_name: {
			type: String,
			required: [true, 'first name is required'],
		},
		last_name: {
			type: String,
			required: [true, 'last name is required'],
		},
		birth_date: { type: Date, required: false },
		email: {
			type: String,
			required: [true, 'email is required'],
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
	},
	{ versionKey: false, timestamps: true }
)

EmployeeSchema.pre('save', async function () {
	if (this.isModified('password')) {
		this.passwordHash = await bcrypt.hash(this.password, 8)
	}
})

const EmployeeModel = model<EmployeeInterface>('employee', EmployeeSchema)

export { EmployeeModel, EmployeeInterface }
