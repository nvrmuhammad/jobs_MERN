import { Users } from './Users.js'

export const showUsersService = async ({ params }) => {
  const { id } = params
  const list = await Users.findOne({ _id: id })

  return list
}
