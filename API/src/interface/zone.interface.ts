import { Document } from 'mongoose'

export default interface ZoneInterface extends Document {
	_id: string
	name: string
}