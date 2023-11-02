import { Router } from 'express'
import {
  addUsers,
  listOneUser,
  listUsers,
  loginUsers,
  removeUser,
  showUser,
  updateUsers,
} from './_controller.js'
import { verify } from '../../middlewares/isLoggedIn.js'
import upload from '../../config/multer.js'

const router = Router()

router.get('/users', verify, listUsers)
router.get('/users/:id', listOneUser)
router.get('/user/me', verify, showUser)
router.post('/users', upload.single('avatar'), addUsers)
router.post('/userslogin', loginUsers) // Login
router.put('/users', upload.single('avatar'), verify, updateUsers)
router.delete('/users', verify, removeUser)

export default router
