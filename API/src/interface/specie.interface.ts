import { Document } from 'mongoose'

export default interface SpecieInterface extends Document {
	_id: string
	name: string
	sociable: boolean
	observations: string
	dangerous: boolean
	enclosure: object
}