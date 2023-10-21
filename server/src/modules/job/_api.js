import { Router } from 'express'
import { verify } from '../../middlewares/isLoggedIn.js'
import {
  addJob,
  listJob,
  removeJob,
  showJob,
  updateJob,
  accessJob,
} from './_controller.js'

const router = Router()
router.get('/vacancy', verify, listJob)
router.get('/vacancy/:id', showJob)
router.post('/vacancy', verify, addJob)
router.put('/vacancy/:id', verify, updateJob)
router.patch('/vacancy/access/:id', verify, accessJob)
router.delete('/vacancy/:id', verify, removeJob)

export default router
