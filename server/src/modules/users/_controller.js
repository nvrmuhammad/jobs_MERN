import { addUsersService } from './add-users.js'
import { listUsersService } from './list-users.js'

export const listUsers = (req, res, next) => {
  try {
    const result = listUsersService()

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const addUsers = (req, res, next) => {
  try {
    const result = addUsersService({ body: req.body })

    res.status(201).json({ data: result })
  } catch (error) {
    next(error)
  }
}
