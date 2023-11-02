import { Admin } from '../Schema/Admin.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const addAdminService = async ({ body, user }) => {
  const { username, password } = body
  const { role, id } = user

  if (role !== 'admin') {
    return { error: 'You are not admin' }
  }

  const checking = await Admin.findOne({ _id: id })

  if (!checking) {
    return { error: 'Admin is not defined' }
  }

  const exsited = await Admin.findOne({ username: username })

  if (exsited) {
    return { error: 'This is admin already existed' }
  }

  const hashedPassword = bcrypt.hashSync(password, 10)
  const newAdmin = await Admin.create({ ...body, password: hashedPassword })
  return newAdmin
}
