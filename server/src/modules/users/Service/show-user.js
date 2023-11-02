import { Users } from '../Schema/Users.js'

export const showUsersService = async ({ user }) => {
  const { id } = user
  const list = await Users.findOne({ _id: id })
  if (!list) {
    return { error: 'User not found' }
  }

  return list
}
