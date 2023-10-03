import { Router } from 'express'
import {
  addUsers,
  listUsers,
  loginUsers,
  removeUser,
  showUsers,
  updateUsers,
} from './_controller.js'
import { updateUserService } from './update-users.js'

const router = Router()

router.get('/users', listUsers)
router.post('/users', addUsers)
router.get('/users/:id', showUsers)
router.put('/users/:id', updateUsers)
router.post('/userslogin', loginUsers) // Login
router.delete('/users/:id', removeUser)

export default router
