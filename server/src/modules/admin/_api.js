import { Router } from 'express'
import { addAdmin, listAdmin, removeAdmin, updateAdmin } from './_controller.js'

const router = Router()

router.get('/admins', listAdmin)
router.post('/admins', addAdmin)
router.put('/admins/:id', updateAdmin)
router.delete('/admins/:id', removeAdmin)

export default router
