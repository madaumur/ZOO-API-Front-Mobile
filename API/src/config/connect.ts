import 'dotenv/config'
import { connect } from 'mongoose'

/* env variable vérification */
if (!process.env.MONGO_URL) {
	throw new Error('Please add the MONGO_URL environment variable')
}

/* Conection to the database (MongoDb) */
async function connectDb(): Promise<void> {
	try {
		await connect(<string>process.env.MONGO_URL)
		console.log('[mongoDB] ✅ Database connected successfully')
	} catch (error) {
		console.log('[mongoDB] ❌ Database connection error' + error)
		process.exit(1)
	}
}

export default connectDb
