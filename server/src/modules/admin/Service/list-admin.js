import { Admin } from '../Schema/Admin.js'

export const listAdminsServices = async ({ user }) => {
  if (user.role !== 'admin') {
    return { error: 'You are not admin' }
  }

  const checking = await Admin.findOne({ _id: user.id })

  if (!checking) {
    return { error: 'Admin is not defined' }
  }

  const list = await Admin.find()

  return list
}
