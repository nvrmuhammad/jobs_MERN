import { Admin } from '../Schema/Admin.js'

export const removeAdminService = async ({ user, params }) => {
  const { id: identify, role } = user
  const { id } = params

  if (role !== 'admin') {
    return { error: 'You are not admin , you have not access ' }
  }

  const checking = await Admin.findOne({ _id: identify })

  if (!checking) {
    return { error: 'Admin is not defined' }
  }
  if (id == identify) {
    return { error: 'You cannot erase yourself' }
  }

  const removeAdmin = await Admin.findByIdAndDelete({ _id: id })
  return removeAdmin
}
