import { Router } from 'express'
import { addUsers, listUsers, showUsers } from './_controller.js'

const router = Router()

router.get('/users', listUsers)
router.post('/users', addUsers)
router.get('/users/:id', showUsers)
router.put('/users/:id')
router.post('/users/:id') // Login
router.delete('/users/:id')

export default router
