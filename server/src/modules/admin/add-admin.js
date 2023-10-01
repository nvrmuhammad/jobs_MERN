import { Admin } from './Admin.js'
import bcrypt from 'bcrypt'

export const addAdminService = async ({ body }) => {
  const { username, password } = body

  const hashedPassword = bcrypt.hashSync(password, 10)

  const exsited = await Admin.findOne({ username: username })

  if (exsited) {
    return 'This is admin already existed'
  }
  const newAdmin = await Admin.create({ ...body, password: hashedPassword })
  return newAdmin
}
