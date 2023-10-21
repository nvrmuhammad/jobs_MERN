import { Users } from '../Schema/Users.js'

export const listOneUserService = async ({ params }) => {
  const { id } = params

  const list = await Users.findOne({ _id: id })

  if (!list) {
    return 'user not found'
  }

  return list
}
