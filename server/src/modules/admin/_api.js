import { Router } from 'express'
import {
  addAdmin,
  listAdmin,
  loginAdmin,
  removeAdmin,
  updateAdmin,
} from './_controller.js'

const router = Router()

router.get('/admins', listAdmin)
router.post('/admins', addAdmin)
router.put('/admins/:id', updateAdmin)
router.delete('/admins/:id', removeAdmin)
router.post('/adminLogin', loginAdmin)

export default router
