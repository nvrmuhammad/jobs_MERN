import { addUsersService } from './add-users.js'
import { listUsersService } from './list-users.js'
import { showUsersService } from './show-user.js'

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
