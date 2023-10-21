import { Users } from '../Schema/Users.js'

export const removeUserService = async ({ user }) => {
  const { id } = user

  const checking = await Users.findOne({ _id: id })

  if (!checking) {
    return 'This user is not registered or not found'
  }

  const removeAdmin = await Users.findByIdAndDelete({ _id: id })
  return removeAdmin
}
