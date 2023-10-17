import { Admin } from './Admin.js'

export const listAdminsServices = async ({ user }) => {
  const { role, id } = user

  const checking = await Admin.findOne({ _id: id })

  if (!checking) {
    return { error: 'admin is not defined' }
  }
  if (role !== 'admin') {
    return { error: 'you have not access' }
  }

  const list = await Admin.find()

  return list
}
