import { Admin } from './Admin.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const addAdminService = async ({ body, token }) => {
  const { username, password } = body
  const tokenVerify = jwt.verify(token, process.env.SECRET_KEY)

  if (!tokenVerify.role == 'admin') {
    return 'You are not an admin'
  }

  const hashedPassword = bcrypt.hashSync(password, 10)

  const exsited = await Admin.findOne({ username: username })

  if (exsited) {
    return 'This is admin already existed'
  }
  const newAdmin = await Admin.create({ ...body, password: hashedPassword })
  return newAdmin
}
