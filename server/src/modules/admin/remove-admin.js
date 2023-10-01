import { Admin } from './Admin.js'

export const removeAdminService = async ({ params }) => {
  const { id } = params
  const removeAdmin = await Admin.findByIdAndDelete({ _id: id })
  return removeAdmin
}
