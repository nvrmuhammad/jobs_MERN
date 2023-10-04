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

router.get('/admins', listAdmin)
router.get('/admins/:id', showAdmin)
router.post('/admins', verify, addAdmin)
router.put('/admins/:id', updateAdmin)
router.delete('/admins/:id', removeAdmin)
router.post('/adminLogin', loginAdmin)

export default router
