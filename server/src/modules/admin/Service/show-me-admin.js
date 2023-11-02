import { Admin } from '../Schema/Admin.js'

export const showMeAdminsServices = async ({ user }) => {
  const { id, role } = user

  if (role !== 'admin') {
    return { error: 'you have not access' }
  }

  const list = await Admin.findOne({ _id: id })

  if (!list) {
    return 'Admin is not defined'
  }

  return list
}
