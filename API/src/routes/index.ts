import express from 'express'
import AnimalRouter from './animal.routes'
import EmployeeRouter from './employee.routes'
import EnclosureRouter from './enclosure.routes'
import SpecieRouter from './specie.routes'
import ZoneRouter from './zone.routes'

const router = express.Router()

router.get('/api/test', (rep, res) => res.sendStatus(200))

router.use(AnimalRouter)
router.use(SpecieRouter)
router.use(EnclosureRouter)
router.use(ZoneRouter)
router.use(EmployeeRouter)

export default router
