import { Router } from 'express'
import { addAdmin, listAdmin } from './_controller.js'

const router = Router()

router.get('/admins', listAdmin)
router.post('/admins', addAdmin)
router.put('/admins/:id', )

export default router
