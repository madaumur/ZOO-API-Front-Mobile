import mongoose from 'mongoose'
import config from 'config'
import logger from './logger'

export async function connect(): Promise<void> {
	const dbUri: string = config.get<string>('mongo_uri')

	try {
		await mongoose.connect(dbUri)
		logger.info('✅ Database connected successfully')
	} catch (error) {
		logger.error('❌ Database connection error')
		process.exit(1)
	}
}