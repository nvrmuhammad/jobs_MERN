import { Router } from 'express'
import {
  addAdmin,
  listAdmin,
  loginAdmin,
  removeAdmin,
  showAdmin,
  updateAdmin,
} from './_controller.js'
import { verify } from '../../middlewares/isLoggedIn.js'

const router = Router()

router.get('/admins', verify, listAdmin)
router.get('/admins/:id', verify, showAdmin)
router.post('/admins', verify, addAdmin)
router.put('/admins', verify, updateAdmin)
router.delete('/admins', verify, removeAdmin)
router.post('/adminLogin', loginAdmin)

export default router
