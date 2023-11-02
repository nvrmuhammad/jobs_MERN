import { Router } from 'express'
import {
  addAdmin,
  listAdmin,
  loginAdmin,
  removeAdmin,
  showAdmin,
  showMeAdmin,
  updateAdmin,
} from './_controller.js'
import { verify } from '../../middlewares/isLoggedIn.js'

const router = Router()

router.get('/admins', verify, listAdmin)
router.get('/admins/:id', verify, showAdmin)
router.get('/admin/me', verify, showMeAdmin)
router.post('/admins', verify, addAdmin)
router.put('/admins', verify, updateAdmin)
router.delete('/admins/:id', verify, removeAdmin)
router.post('/adminLogin', loginAdmin)

export default router
