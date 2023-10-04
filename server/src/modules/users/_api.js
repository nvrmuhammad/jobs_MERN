import { Router } from 'express'
import {
  addUsers,
  listUsers,
  loginUsers,
  removeUser,
  showUsers,
  updateUsers,
} from './_controller.js'
import { verify } from '../../middlewares/isLoggedIn.js'

const router = Router()

router.get('/users', listUsers)
router.post('/users', addUsers)
router.get('/users/:id', showUsers)
router.put('/users', verify, updateUsers)
router.post('/userslogin', loginUsers) // Login
router.delete('/users/:id', removeUser)

export default router
