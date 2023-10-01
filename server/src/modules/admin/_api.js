import { Router } from 'express'
import { addAdmin, listAdmin, updateAdmin } from './_controller.js'

const router = Router()

router.get('/admins', listAdmin)
router.post('/admins', addAdmin)
router.put('/admins/:id', updateAdmin)

export default router
