import { Users } from './Users.js'

export const removeUserService = async ({ params }) => {
  const { id } = params
  const removeAdmin = await Users.findByIdAndDelete({ _id: id })
  return removeAdmin
}
