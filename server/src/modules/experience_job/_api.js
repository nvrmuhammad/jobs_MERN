import { Router } from 'express'
import { verify } from '../../middlewares/isLoggedIn.js'
import {
  addExperience,
  listExperience,
  removeExperience,
  showExperience,
  updateExperience,
} from './_controller.js'
const router = Router()

router.get('/experience', listExperience)
router.get('/experience/:id', showExperience)
router.post('/experience', verify, addExperience)
router.delete('/experience/:id', verify, removeExperience)
router.put('/experience/:id', verify, updateExperience)

export default router
