import { Router } from 'express'
import {
  cAddCategory,
  cListCategories,
  cRemoveCategory,
  cUpdateCategory,
} from './_controller.js'
import { verify } from '../../middlewares/isLoggedIn.js'
const router = Router()

router.get('/companyCategories', cListCategories)
router.post('/companyCategories', verify, cAddCategory)
router.delete('/companyCategories/:id', verify, cRemoveCategory)
router.put('/companyCategories/:id', verify, cUpdateCategory)

export default router
