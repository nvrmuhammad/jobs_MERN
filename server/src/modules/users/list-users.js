import { Users } from './Users.js'

export const listUsersService = async () => {
  const list = await Users.find()

  return list
}
