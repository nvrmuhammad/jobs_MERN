import { Admin } from '../Schema/Admin.js'

export const showAdminsServices = async ({ user, params }) => {
  const { role } = user
  const { id } = params

  if (role !== 'admin') {
    return { error: 'you have not access' }
  }

  const list = await Admin.findOne({ _id: id })

  if (!list) {
    return 'Admin is not defined'
  }

  return list
}
