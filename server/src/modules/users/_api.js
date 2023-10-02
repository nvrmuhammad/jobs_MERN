import { Router } from 'express'
import { listUsers } from './_controller.js'

const router = Router()

router.get('/users', listUsers)
router.post('/users')
router.get('/users/:id')
router.put('/users/:id')
router.post('/users/:id') // Login
router.delete('/users/:id')

export default router
