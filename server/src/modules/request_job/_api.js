import { Router } from 'express'
import { addRequest, listRequest } from './_controller.js'
import { verify } from '../../middlewares/isLoggedIn.js'

const router = Router()

router.get('/request', verify, listRequest)
router.post('/request', verify, addRequest)

export default router
