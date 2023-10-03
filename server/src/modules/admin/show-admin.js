import { Admin } from './Admin.js'

export const showAdminsServices = async ({ params }) => {
  const { id } = params
  const list = await Admin.findOne({ _id: id })

  if (!list) {
    return 'Admin is not defined'
  }

  return list
}
