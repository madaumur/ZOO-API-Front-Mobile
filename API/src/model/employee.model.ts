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
			validate():void {
				if (!validator.isEmail) throw new Error("email isn't correct")
			},
		},
		password: {
			type: String,
			required: [true, 'password is required'],
			validate(v : any):void {
				if (!validator.isLength(v, {min :4})) throw new Error("password must be at least 4 characters")
			},
		},
		role: {
			type: String,
			required: [true, 'role is required'],
			enum: ['NONE', 'SOINEUR', 'VETERINAIRE', 'ADMIN'],
		},
	},
	{ versionKey: false, timestamps: true }
)

const EmployeeModel = model<EmployeeInterface>('employee', EmployeeSchema)

export { EmployeeModel, EmployeeInterface }
