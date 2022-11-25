import express from 'express'
import animalRouter from './animal.routes'
import specieRouter from './specie.routes'

const router = express.Router()

router.get('/api/test', (rep, res) => res.sendStatus(200))

router.use(animalRouter)
router.use(specieRouter)

export default router
