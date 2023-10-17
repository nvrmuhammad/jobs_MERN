import { Admin } from './Admin.js'

export const removeAdminService = async ({ user }) => {
  const { id, role } = user

  if (role !== 'admin') {
    return { error: 'You are not admin , you have not access ' }
  }

  const checking = await Admin.findOne({ _id: id })

  if (!checking) {
    return { error: 'Admin is not defined' }
  }

  const removeAdmin = await Admin.findByIdAndDelete({ _id: id })
  return removeAdmin
}
