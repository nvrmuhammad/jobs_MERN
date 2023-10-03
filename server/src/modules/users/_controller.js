import { addUsersService } from './add-users.js'
import { listUsersService } from './list-users.js'
import { loginUsersService } from './login-users.js'
import { removeUserService } from './remove-user.js'
import { showUsersService } from './show-user.js'
import { updateUserService } from './update-users.js'

export const listUsers = async (req, res, next) => {
  try {
    const result = await listUsersService()

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const showUsers = async (req, res, next) => {
  try {
    const result = await showUsersService({ params: req.params })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const addUsers = async (req, res, next) => {
  try {
    const result = await addUsersService({ body: req.body })

    res.status(201).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const updateUsers = async (req, res, next) => {
  try {
    const result = await updateUserService({
      body: req.body,
      params: req.params,
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
    const result = await removeUserService({ params: req.params })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
