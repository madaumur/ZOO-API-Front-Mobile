import express from 'express'
import animalRouter from './animal.routes'
import enclosureRouter from './enclosure.routes'
import specieRouter from './specie.routes'
import zoneRouter from './zone.routes'

const router = express.Router()

router.get('/api/test', (rep, res) => res.sendStatus(200))

router.use(animalRouter)
router.use(specieRouter)
router.use(enclosureRouter)
router.use(zoneRouter)

export default router
