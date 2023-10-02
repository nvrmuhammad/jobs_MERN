import { listUsersService } from './list-users.js'

export const listUsers = (req, res, next) => {
  try {
    const result = listUsersService()

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
