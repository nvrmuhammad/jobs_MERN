import { Admin } from './Admin.js'

export const addAdminService = async ({ body }) => {
  const { username } = body

  const exsited = await Admin.findOne({ username: username })

  if (exsited) {
    return 'This is admin already existed'
  }
  const newAdmin = await Admin.create(body)
  return newAdmin
}
