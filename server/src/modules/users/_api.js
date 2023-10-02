import { Router } from 'express'

const router = Router()

router.get('/users')
router.post('/users')
router.get('/users/:id')
router.put('/users/:id')
router.post('/users/:id') // Login
router.delete('/users/:id')

export default router
