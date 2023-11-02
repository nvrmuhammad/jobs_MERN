import { userSignup } from '../../utils/joi.js'
import { addUsersService } from './Service/add-users.js'
import { listUsersService } from './Service/list-users.js'
import { loginUsersService } from './Service/login-users.js'
import { listOneUserService } from './Service/one-user.js'
import { removeUserService } from './Service/remove-user.js'
import { showUsersService } from './Service/show-user.js'
import { updateUserService } from './Service/update-users.js'

export const listUsers = async (req, res, next) => {
  try {
    const result = await listUsersService({ user: req.user })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const listOneUser = async (req, res, next) => {
  try {
    const result = await listOneUserService({ params: req.params })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const showUser = async (req, res, next) => {
  try {
    const result = await showUsersService({ user: req.user })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}

export const addUsers = async (req, res, next) => {
  try {
    const { error } = userSignup.validate(req.body)
    if (error) {
      return res.status(400).json({ error: error.message })
    }
    const result = await addUsersService({ body: req.body, file: req.file })

    res.status(201).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const updateUsers = async (req, res, next) => {
  try {
    const result = await updateUserService({
      body: req.body,
      user: req.user,
      file: req.file,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}

export const loginUsers = async (req, res, next) => {
  try {
    const result = await loginUsersService({ body: req.body })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}

export const removeUser = async (req, res, next) => {
  try {
    const result = await removeUserService({ user: req.user })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
