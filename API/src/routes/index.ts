import express from 'express'
import animalRouter from './animal.routes'

const router = express.Router()

router.get('/healthcheck', (_, res) => res.sendStatus(200))

router.use(animalRouter)

export default router