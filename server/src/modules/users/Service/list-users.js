import { Users } from '../Schema/Users.js'

export const listUsersService = async ({ user }) => {
  const { role } = user

  if (role !== 'admin') {
    return { error: 'You have not access to see all users' }
  }

  const list = await Users.find()

  return list
}
